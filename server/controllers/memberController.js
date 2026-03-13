const Member = require('../models/Member')
const { sendApplicationConfirmation, sendApprovalEmail, sendRejectionEmail } = require('../utils/emailService')

const registerMember = async (req, res) => {
  try {
    const { email } = req.body

    const existingMember = await Member.findOne({ email })
    if (existingMember) {
      return res.status(400).json({ message: 'A member with this email already exists' })
    }

    const member = await Member.create(req.body)

    try {
      await sendApplicationConfirmation(member.email, member.fullName)
    } catch (emailError) {
      console.log('Email sending failed:', emailError.message)
    }

    res.status(201).json({
      message: 'Application submitted successfully',
      member
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

const getAllMembers = async (req, res) => {
  try {
    const { status } = req.query
    const filter = status ? { status } : {}
    const members = await Member.find(filter).sort({ appliedAt: -1 })
    res.status(200).json(members)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

const updateMemberStatus = async (req, res) => {
  try {
    const { status } = req.body
    const member = await Member.findByIdAndUpdate(
      req.params.id,
      {
        status,
        reviewedAt: Date.now(),
        reviewedBy: req.admin.name
      },
      { new: true }
    )

    if (!member) {
      return res.status(404).json({ message: 'Member not found' })
    }

    try {
      if (status === 'approved') {
        await sendApprovalEmail(member.email, member.fullName)
      } else if (status === 'rejected') {
        await sendRejectionEmail(member.email, member.fullName)
      }
    } catch (emailError) {
      console.log('Email sending failed:', emailError.message)
    }

    res.status(200).json({ message: `Member ${status} successfully`, member })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

module.exports = { registerMember, getAllMembers, updateMemberStatus }