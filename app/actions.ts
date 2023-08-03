import { API } from 'aws-amplify'

export async function handleContactFormSubmit(formData:FormData) {
  const contactName = formData.get("contactName");
  const contactEmail = formData.get("contactEmail");
  const contactMessage = formData.get("contactMessage");

  if (contactName && contactEmail && contactMessage) {
    console.debug(`Send contact notification for ${contactEmail}`)
    await API.post('site-contacts', 'contact-form-relay', { contactName, contactEmail, contactMessage});
  }
}
