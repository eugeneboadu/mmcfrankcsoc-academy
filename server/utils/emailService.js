const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)

const sendApplicationConfirmation = async (memberEmail, memberName) => {
  await resend.emails.send({
    from: 'MmcfraNkcsoc Academy <onboarding@resend.dev>',
    to: memberEmail,
    subject: 'Application Received - MmcfraNkcsoc Academy',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #2D6A4F; padding: 30px; text-align: center;">
          <h1 style="color: #F4A827; margin: 0;">⊕ MmcfraNkcsoc Academy</h1>
        </div>
        <div style="padding: 30px; background-color: #FDFAF5;">
          <h2 style="color: #1B4332;">Dear ${memberName},</h2>
          <p style="color: #555; line-height: 1.8;">
            Thank you for applying to join MmcfraNkcsoc Academy. We have received 
            your application and our team will review it shortly.
          </p>
          <p style="color: #555; line-height: 1.8;">
            You will receive another email once a decision has been made. 
            In the meantime, feel free to explore our website and read our field stories.
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://mmcfrankcsoc-academy.vercel.app/stories" 
               style="background-color: #F4A827; color: #1a1a1a; padding: 14px 28px; 
                      border-radius: 8px; text-decoration: none; font-weight: bold;">
              Read Field Stories
            </a>
          </div>
          <p style="color: #555;">⊕ Nyansapo — Wisdom Knot</p>
        </div>
      </div>
    `
  })
}

const sendApprovalEmail = async (memberEmail, memberName) => {
  await resend.emails.send({
    from: 'MmcfraNkcsoc Academy <onboarding@resend.dev>',
    to: memberEmail,
    subject: 'Welcome to MmcfraNkcsoc Academy! 🎉',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #2D6A4F; padding: 30px; text-align: center;">
          <h1 style="color: #F4A827; margin: 0;">⊕ MmcfraNkcsoc Academy</h1>
        </div>
        <div style="padding: 30px; background-color: #FDFAF5;">
          <h2 style="color: #1B4332;">Welcome, ${memberName}! 🎉</h2>
          <p style="color: #555; line-height: 1.8;">
            We are thrilled to inform you that your application to join 
            MmcfraNkcsoc Academy has been <strong style="color: #2D6A4F;">approved</strong>.
          </p>
          <p style="color: #555; line-height: 1.8;">
            You are now an official member of our community. We will be in touch 
            soon with details about upcoming school visits and activities.
          </p>
          <p style="color: #555; line-height: 1.8;">
            Together we will bring the gift of technology education to children 
            who need it most. Welcome to the family!
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://mmcfrankcsoc-academy.vercel.app" 
               style="background-color: #F4A827; color: #1a1a1a; padding: 14px 28px; 
                      border-radius: 8px; text-decoration: none; font-weight: bold;">
              Visit Our Website
            </a>
          </div>
          <p style="color: #555;">⊕ Nyansapo — Wisdom Knot</p>
        </div>
      </div>
    `
  })
}

const sendRejectionEmail = async (memberEmail, memberName) => {
  await resend.emails.send({
    from: 'MmcfraNkcsoc Academy <onboarding@resend.dev>',
    to: memberEmail,
    subject: 'Update on Your Application - MmcfraNkcsoc Academy',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #2D6A4F; padding: 30px; text-align: center;">
          <h1 style="color: #F4A827; margin: 0;">⊕ MmcfraNkcsoc Academy</h1>
        </div>
        <div style="padding: 30px; background-color: #FDFAF5;">
          <h2 style="color: #1B4332;">Dear ${memberName},</h2>
          <p style="color: #555; line-height: 1.8;">
            Thank you for your interest in joining MmcfraNkcsoc Academy. 
            After careful review, we are unable to approve your application at this time.
          </p>
          <p style="color: #555; line-height: 1.8;">
            We encourage you to continue following our work and reapply in the future. 
            Your passion for education and technology is valued.
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://mmcfrankcsoc-academy.vercel.app" 
               style="background-color: #F4A827; color: #1a1a1a; padding: 14px 28px; 
                      border-radius: 8px; text-decoration: none; font-weight: bold;">
              Visit Our Website
            </a>
          </div>
          <p style="color: #555;">⊕ Nyansapo — Wisdom Knot</p>
        </div>
      </div>
    `
  })
}

module.exports = { 
  sendApplicationConfirmation, 
  sendApprovalEmail, 
  sendRejectionEmail 
}