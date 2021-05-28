import { Usage } from "../models/Usage";

export const Usages:Usage []=[{
    "id": "93c2-683ea281566c",
    "href": "https://api.csp.com/tmf-api/usagemanagement/v4/usage/93c2-683ea281566c",
    "usageDate": new Date(2020-11-20),
    "description": "Voicemail Retrieval",
    "usageType": "Voicemail",
    "ratedProductUsage": [
    {
    "isBilled": false,
    "isTaxExempt": true,
    "offerTariffType": "Normal",
    "ratingAmountType": "Total",
    "ratingDate": "2020-06-17T21:03:37.829Z",
    "taxRate": 0,
    "usageRatingTag": "voicemail",
    "bucketValueConvertedInAmount": {
    "unit": "EUR",
    "value": 0
    },
    "productRef": {
    "id": "a22b-1c848b2a1b64",
    "href": "https://api.csp.com/tmf-api/productInventory/v4/product/a22b-1c848b2a1b64",
    "name": "Voicemail",
    "@referredType": "Product"
    },
    "taxExcludedRatingAmount": {
    "unit": "EUR",
    "value": 0
    },
    "taxIncludedRatingAmount": {
    "unit": "EUR",
    "value": 0
    }
    }
    ],
    "relatedParty": [
    {
    "id": "8185-b246a6746136",
    "href": "https://api.csp.com/tmf-api/partyManagement/v4/individual/8185-b246a6746136",
    "name": "Ivor Message",
    "role": "Customer",
    "@referredType": "Individual"
    }
    ],
    "status": "received",
    "usageCharacteristic": [
    {
    "id": "a0ba-ae64952b68ba",
    "name": "duration-seconds",
    "valueType": "integer",
    "value": "12"
    }
    ],
    "usageSpecification": {
    "id": "9be4-cfee80785eb5",
    "href": "https://api.csp.com/tmf-api/usageManagement/v4/usageSpecification/9be4-cfee80785eb5",
    "name": "Voicemail Retrieval Specification",
    "@referredType": "UsageSpecification"
    }
   },


   
   {
    "id": "93c2-683ea281566d",
    "href": "https://api.csp.com/tmf-api/usagemanagement/v4/usage/93c2-683ea281566d",
    "usageDate": new Date(2020-10-20),
    "description": "Call Retrieval",
    "usageType": "Call",
    "ratedProductUsage": [
    {
    "isBilled": false,
    "isTaxExempt": true,
    "offerTariffType": "Normal",
    "ratingAmountType": "Total",
    "ratingDate": "2020-07-17T21:03:37.829Z",
    "taxRate": 0,
    "usageRatingTag": "call",
    "bucketValueConvertedInAmount": {
    "unit": "EUR",
    "value": 10
    },
    "productRef": {
    "id": "a22b-1c848b2a1b65",
    "href": "https://api.csp.com/tmf-api/productInventory/v4/product/a22b-1c848b2a1b64",
    "name": "Call",
    "@referredType": "Product"
    },
    "taxExcludedRatingAmount": {
    "unit": "EUR",
    "value": 1
    },
    "taxIncludedRatingAmount": {
    "unit": "EUR",
    "value": 4
    }
    }
    ],
    "relatedParty": [
    {
    "id": "8185-b246a6746137",
    "href": "https://api.csp.com/tmf-api/partyManagement/v4/individual/8185-b246a6746136",
    "name": "Ivor Message",
    "role": "Customer",
    "@referredType": "Individual"
    }
    ],
    "status": "rated",
    "usageCharacteristic": [
    {
    "id": "a0ba-ae64952b68bb",
    "name": "duration-seconds",
    "valueType": "integer",
    "value": "20"
    }
    ],
    "usageSpecification": {
    "id": "9be4-cfee80785eb6",
    "href": "https://api.csp.com/tmf-api/usageManagement/v4/usageSpecification/9be4-cfee80785eb5",
    "name": "Call Retrieval Specification",
    "@referredType": "UsageSpecification"
    }
},

{
    "id": "93c2-683ea281566g",
    "usageDate": new Date(2020-11-20),
    "description": "Email Retrieval",
    "usageType": "Email",
    "status": "rated"
    }

];