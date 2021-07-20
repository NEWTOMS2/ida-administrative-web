export const languages = [
  { language: 'es', term: 'ES' },
  { language: 'en', term: 'EN' },
];

export const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

export const administrative_exp_api_host = "https://prod-ida-administrative-exp-api.us-e1.cloudhub.io/api"
export const auth_api_host = "https://ida-auth-api.us-e1.cloudhub.io/api"

export const images = { applicationLogo: "assets/images/exis_logo.png"}

export const ticketStates = [
  {
    state:  "COMPLETED",
    color: "primary"
  },
  {
    state:  "NEW",
    color: "secondary"
  },
  {
    state:  "IN_PROGRESS",
    color: "info"
  }
]
export const ticketTypes = ["SERVICES", "PROBLEMS"]