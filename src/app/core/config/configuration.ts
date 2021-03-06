export const languages = [
  { language: 'es', term: 'ES' },
  { language: 'en', term: 'EN' },
];

export const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

export const administrative_exp_api_host = "https://prod-ida-administrative-exp-api.us-e1.cloudhub.io/api"
export const auth_api_host = "https://ida-auth-api.us-e1.cloudhub.io/api"
export const customer_exp_api_host = "https://pro-ida-customer-exp-api.us-e1.cloudhub.io/api"

export const aws_connect = {
  ccpUrl: 'https://newtoms.my.connect.aws/ccp-v2',
  loginUrl: 'https://newtoms.my.connect.aws',
  region: "us-east-1",        
}

export const images = { 
  applicationLogo: "assets/images/exis_logo.png",
  contactLogo:  "assets/images/contact_logo.png"
}
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

export const ticketTypes = ["BLOCKING_SERVICES", "RECOVER_LINE", "SIM_SHIPPING_ISSUE", "PORTABILITY", "INTERNET_ISSUE", "PAYMENT_ISSUE", "SERVICE_COVERAGE_ISSUE"]
export const faqTypes = ["SERVICES", "PROSPECTS", "SIM_SHIPPING_ISSUE", "PURCHASES", "INTERNET_ISSUE", "BLOCKING_SERVICES"]
export const userStates = ["ACTIVE", "INACTIVE"]
export const phonePlanStates = ["AVAILABLE", "UNAVAILABLE"]
export const phonePlanTypes = ["SIMPLE", "RECURRING"]
export const clientTypes = ["EXIS_CLIENT", "PROSPECT"]

export const loaderConfig = Object.freeze({
  animationType: 'pulse',
  fullScreenBackdrop:true,
  backdropBackgroundColour: "#182249",
  backdropBorderRadius: '0px',
  primaryColour:  "#63709F",
  secondaryColour:  "#63709F",
  tertiaryColour: '#EBF1FA',
});

export const routes = {
  "ADMIN": ['attention', 'communication-analysis', 'frequently-questions', 'tickets', 'mvno-information', 'users'],
  "AGENT": ['attention', 'tickets']
}
export const userTypes = [ 'agent', 'admin']
export const claimTypes = ['INTERNET_ISSUE', 'SIM_SHIPPING_ISSUE', 'PACKAGE_ISSUE', 'BLOCKING_SERVICES', 'PAYMENT_ISSUE', 'SERVICE_COVERAGE_ISSUE']
export const address = [
  {
    country: 'M??xico',
    code: 'M??XICO',
    cities: [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Coahuila',
    'Colima',
    'Distrito Federal',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'M??xico',
    'Michoac??n',
    'Morelos',
    'Nayarit',
    'Nuevo Le??n',
    'Oaxaca',
    'Puebla',
    'Quer??taro',
    'Quintana Roo',
    'San Luis Potos??',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucat??n',
    'Zacatecas']
  },
  {
    country: 'United States',
    code: 'UNITED_STATES',
    cities: [
      'Alaska',
      'Alabama',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'District of Columbia',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Puerto Rico',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming'
      ]
  },
  {
    country: 'Canad??',
    code: 'CANAD??',
    cities: [
      'Alberta',
      'British Columbia',
      'Manitoba',
      'New Brunswick',
      'Newfoundland and Labrador',
      'Northwest Territories',
      'Nova Scotia',
      'Nunavut Territory',
      'Ontario',
      'Prince Edward Island',
      'Qu??bec',
      'Saskatchewan',
      'Yukon Territory'
    ]
  }
]