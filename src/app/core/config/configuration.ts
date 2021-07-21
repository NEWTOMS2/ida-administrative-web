export const languages = [
  { language: 'es', term: 'ES' },
  { language: 'en', term: 'EN' },
];

export const administrative_exp_api_host = "https://prod-ida-administrative-exp-api.us-e1.cloudhub.io/api"

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
export const loaderConfig = Object.freeze({
  animationType: 'pulse',
  backdropBackgroundColour: "#182249",
  backdropBorderRadius: '4px',
  primaryColour:  "#63709F",
  secondaryColour:  "#63709F",
  tertiaryColour: '#EBF1FA',
});
