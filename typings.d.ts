interface Sanitybody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
    otherProp?: any;
}

interface  image {
    _type : "image";
    asset :{
        _ref: string,
        _type: "reference"
    };
}



export interface postInfo extends Sanitybody {
    _type :"postInfo";
    address: string;
    backgroundInformation : string;
    email : string;
    heroImage : image;
    name: string;
    phoneNumber: string;
    profilePic: image;
    role: string;
    pageinfo : any
}

export interface skill extends Sanitybody {
    _type : "skill";
    image  : image;
    progress : number;
    tittle : string;
    map : any
}

export interface project extends Sanitybody {
    _type: "project";
    image: image;
    linkToBuild: string;
    summary: string;
    tittle: string;
    technologies: skill[];
}

export interface experience extends Sanitybody {
    _type: "experience";
    address: string;
    company: string;
    companyImage : string;
    dateEnded: string;
    dateStarted : string;
    jobTitle    : string;
    profilePic : any
    isCurrentlyWorkingHere : boolean;
    technologies: skill[];
    points : string[];

}