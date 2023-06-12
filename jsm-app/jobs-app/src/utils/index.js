export const jobsTypes = [
  'Full-time',
  'Part-time',
  'Contractor',
  'Half-time'
]

export const tabs = [
  'About',
  'Qualifications',
  'Responsibilities'
]

export const checkImageURL = (url) => {
  if (!url) return false
  else {
    const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
    return pattern.test(url);
  }
}