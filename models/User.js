const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    //  genform
    FirstName: {
        type: String,
        default: "",
        require: true
    },
    LastName: {
        type: String,
        default: "",
        require: true
    },
    Address:{
        type: String,
        default: ""
    },
    Gender:{
        type: String,
        default: ""
    },
    DOB:{
        type: String,
        default: ""
    },
    
    Age:{
        type: String,
        default: ""
    },
    
    Email:{
        type: String,
        default: "",
        require: true
    },
    Division:{
        type: String,
        default: ""
    },
    District:{
        type: String,
        default: ""
    },
    Block:{
        type: String,
        default: ""
    },
    PinCode:{
        type: String,
        default: "",
        max: 6,
    },
    PinArea:{
        type: String,
        default: ""
    },
    OtherPinArea:{
        type: String,
        default: ""
    },
    PhoneNumber: {
        type: String,
        default: "",
        max: 9
    },
    AdhaarNumber: {
        type: String,
        default: "",
        max: 11
    },
    MaritalStatus:{
        type: String,
        default: ""
    },
    Religion:{
        type: String,
        default: ""
    },
    OtherReligion:{
        type: String,
        default: ""
    },
    Category:{
        type: String,
        default: ""
    },
    SocailClass:{
        type: String,
        default: ""
    },
    AgeGroup:{
        type: String,
        default: ""
    },
    MFI:{
        type: String,
        default: ""
    },


    // first Form
    EmployeeStatus:{
        type: String,
        default: ""
    },
    Education:{
        type: String,
        default: ""
    },
    Occupation:{
        type: String,
        default: ""
    },
    CurrentSkillLevel:{
        type: String,
        default: ""
    },
    CrucialSkill:{
        type: String,
        default: ""
    },
    PartiTrainProDev:{
        type: String,
        default: ""
    },
    AdequatPrepared:{
        type: String,
        default: ""
    },
    SpecificSkills:{
        type: String,
        default: ""
    },
    NecessaySkills:{
        type: String,
        default: ""
    },
    EduTrainInstit:{
        type: String,
        default: ""
    },
    SuggestionToSystem:{
        type: String,
        default: ""
    },
    GovSupportSkillDev:{
        type: String,
        default: ""
    },




    //  specific questions
    SectorQuestionnarie:{
        type: String,
        default: ""
    },


    SectorYOE:{
        type: String,
        default: ""
    },
    SpecificArea:{
        type: String,
        default: ""
    },
    Scale:{
        type: Schema.Types.Mixed,
        default: {}
    },
    CriticalSkillGap:{
        type: String,
        default: ""
    },
    SDI:{
        type: String,
        default: ""
    },
    SpecifiedFormalTrainCerti:{
        type: String,
        default: ""
    },
    Satisfaction:{
        type: String,
        default: ""
    },
    SpecifySkills:{
        type: String,
        default: ""
    },
    SpecifiedSpecificSkills:{
        type: String,
        default: ""
    },
    StayUpdated:{
        type: String,
        default: ""
    },
    Opinion:{
        type: String,
        default: ""
    },
    SpecificChal:{
        type: String,
        default: ""
    },
    PSD:{
        type: String,
        default: ""
    },
    FSD:{
        type: String,
        default: ""
    },




    GovSponSDP:{
        type: String,
        default: ""
    },
    ParticipatedProg:{
        type: String,
        default: ""
    },
    SatisfactionAgriExten:{
        type: String,
        default: ""
    },
    AddSuppTrain:{
        type: String,
        default: ""
    },
    RTA:{
        type: String,
        default: ""
    },
    CultSocialFactors:{
        type: String,
        default: ""
    },
    AdequateAware:{
        type: String,
        default: ""
    },
    MPSD:{
        type: String,
        default: ""
    },
    FSDAAS:{
        type: String,
        default: ""
    },



    CCI:{
        type: String,
        default: ""
    },
    PerceiveRSC:{
        type: String,
        default: ""
    },
    IOT:{
        type: String,
        default: ""
    },
    CultHeriPreserv:{
        type: String,
        default: ""
    },
    SpecificCultHeriPreserv:{
        type: String,
        default: ""
    },
    TourInHandi:{
        type: String,
        default: ""
    },
    SRSuppHandi:{
        type: String,
        default: ""
    },
    KeyBarriers:{
        type: String,
        default: ""
    },
    SuggImprov:{
        type: String,
        default: ""
    },
    Importance:{
        type: String,
        default: ""
    },


    SpecializedTrainProg:{
        type: String,
        default: ""
    },
    RoleVocTrainInsti:{
        type: String,
        default: ""
    },
    RoleIndudsPartnershipCollab:{
        type: String,
        default: ""
    },
    SpecificTechAdvance:{
        type: String,
        default: ""
    },
    ImportanceSS:{
        type: String,
        default: ""
    },
    Regulations:{
        type: String,
        default: ""
    },
    InteDigitalPlat:{
        type: String,
        default: ""
    },
    SufficientEmphasis:{
        type: String,
        default: ""
    },
    Initiatives:{
        type: String,
        default: ""
    },
    EnvisionFSD:{
        type: String,
        default: ""
    },


    NeedSpecializedTrainProg:{
        type: String,
        default: ""
    },
    RoleVocEdu:{
        type: String,
        default: ""
    },
    SpecificTechSkills:{
        type: String,
        default: ""
    },
    AdoptionIT:{
        type: String,
        default: ""
    },
    CultSocailFactors:{
        type: String,
        default: ""
    },
    CollabEduInsti:{
        type: String,
        default: ""
    },
    ImportanceSoftSkills:{
        type: String,
        default: ""
    },
    PrivateSectorOrg:{
        type: String,
        default: ""
    },
    MeasuresImplement:{
        type: String,
        default: ""
    },
    EnvisionFutureWorkForce:{
        type: String,
        default: ""
    },

    
    
    role:{
        type: String,
        default: "user"
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    
},
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);