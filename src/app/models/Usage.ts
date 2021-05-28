import { Type } from "@angular/core";

export interface Usage{
    href?:String,
    id:string,
    description:String,
    ratedProductUsage?:RatedProductUsage[],
    relatedParty?:RelatedParty[],
    status:    "received" | "rated" | "rerated" | "billed" ,
    usageCharacteristic?:UsageCharacteristic[],
    usageDate?:Date,
    usageSpecification?:UsageSpecificationRef,
    usageType:String

    

}


export interface Money{
    unit:String,
    value:Number

}


export interface RatedProductUsage{
    bucketValueConvertedInAmount:Money,
    isBilled:Boolean,
    isTaxExempt:Boolean,
    offerTariffType:String,
    productRef:ProductRef,
    ratingAmountType:String,
    ratingDate:String,
    taxExcludedRatingAmount:Money,
    taxIncludedRatingAmount:Money,
    taxRate:Number,
    usageRatingTag:String

}

export interface RelatedParty{
    name:String,
    href:String,
    id:String,
    role:String
    "@referredType": string;

}


export interface UsageCharacteristic{
    id:String,
    name:String,
    valueType:String,
    characteristicRelationship?:CharacteristicRelationship[],
    value:any


}
export interface UsageSpecificationRef{
    href:String,
    id:String,
    name:String
    "@referredType": string


}

export interface ProductRef{
    name:String,
    href:String,
    id:String
    "@referredType": string;

}
export interface CharacteristicRelationship{
    href:String,
    id:String,
    relationshipType:String

}