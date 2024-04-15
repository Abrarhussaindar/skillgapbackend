const express = require('express');
const User = require('../../models/User');
// const bcrypt = require('bcrypt');

// user controllers



// const Updateuser = async (req, res) => {
//     if(req.body.password){
//         try{
//             const salt = await bcrypt.genSalt(10);
//             req.body.password = await bcrypt.hash(req.body.password, salt);
//         }catch(err){
//             return res.status(500).json(err);
//         }
//     }

//     try{
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, {
//             $set: req.body,
//         }, {new:true});
//         res.status(200).json(updatedUser);
//     }catch(err){
//         return res.status(500).json(err);
//     }
// }


// const GetUser = async (req, res) => {
//     try{
//         const user = await User.findById(req.params.id) 
//         const { password, ...other } = user._doc;
//         res.status(200).json(other);
//     }catch(err){
//         res.status(500).json(err);
//     }
// }

// const DeleteUser = async (req, res) =>{
//     try{
//         await User.findByIdAndDelete(req.param.id)
//         res.status(200).json(`user has been deleted.`)
//     }catch(err){
//         res.status(500).json(err)
//     }
// }
const Createuser = async (req, res) => {
    try{

        const newUser = new User({
            // gen form
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Address: req.body.Address,
            Gender: req.body.Gender,
            DOB: req.body.DOB,
            Age: req.body.Age,
            Email: req.body.Email,
            Division: req.body.Division,
            District: req.body.District,
            Block: req.body.Block,
            PinCode: req.body.PinCode,
            PinArea: req.body.PinArea,
            OtherPinArea: req.body.OtherPinArea,
            PhoneNumber: req.body.PhoneNumber,
            AdhaarNumber: req.body.AdhaarNumber,
            MaritalStatus: req.body.MaritalStatus,
            Religion: req.body.Religion,
            OtherReligion: req.body.OtherReligion,
            Category: req.body.Category,
            SocailClass: req.body.SocailClass,
            AgeGroup: req.body.AgeGroup,
            MFI: req.body.MFI,



            // first Form
            EmployeeStatus: req.body.EmployeeStatus,
            Education: req.body.Education,
            Occupation: req.body.Occupation,
            CurrentSkillLevel: req.body.CurrentSkillLevel,
            CrucialSkill: req.body.CrucialSkill,
            PartiTrainProDev: req.body.PartiTrainProDev,
            AdequatPrepared: req.body.AdequatPrepared,
            SpecificSkills: req.body.SpecificSkills,
            NecessaySkills: req.body.NecessaySkills,
            EduTrainInstit: req.body.EduTrainInstit,
            SuggestionToSystem: req.body.SuggestionToSystem,
            GovSupportSkillDev: req.body.GovSupportSkillDev,

            // specific questions
            SectorQuestionnarie: req.body.SectorQuestionnarie,
            SectorYOE: req.body.SectorYOE,
            SpecificArea: req.body.SpecificArea,
            Scale: req.body.Scale,
            CriticalSkillGap: req.body.CriticalSkillGap,
            SDI: req.body.SDI,
            SpecifiedFormalTrainCerti: req.body.SpecifiedFormalTrainCerti,
            Satisfaction: req.body.Satisfaction,
            SpecifySkills: req.body.SpecifySkills,
            SpecifiedSpecificSkills: req.body.SpecifiedSpecificSkills,
            StayUpdated: req.body.StayUpdated,
            Opinion: req.body.Opinion,
            SpecificChal: req.body.SpecificChal,
            PSD: req.body.PSD,
            FSD: req.body.FSD,

            // additional fields
            GovSponSDP: req.body.GovSponSDP,
            ParticipatedProg: req.body.ParticipatedProg,
            SatisfactionAgriExten: req.body.SatisfactionAgriExten,
            AddSuppTrain: req.body.AddSuppTrain,
            RTA: req.body.RTA,
            CultSocialFactors: req.body.CultSocialFactors,
            AdequateAware: req.body.AdequateAware,
            MPSD: req.body.MPSD,
            FSDAAS: req.body.FSDAAS,

            // more additional fields
            CCI: req.body.CCI,
            PerceiveRSC: req.body.PerceiveRSC,
            IOT: req.body.IOT,
            CultHeriPreserv: req.body.CultHeriPreserv,
            SpecificCultHeriPreserv: req.body.SpecificCultHeriPreserv,
            TourInHandi: req.body.TourInHandi,
            SRSuppHandi: req.body.SRSuppHandi,
            KeyBarriers: req.body.KeyBarriers,
            SuggImprov: req.body.SuggImprov,
            Importance: req.body.Importance,

            // and more additional fields
            SpecializedTrainProg: req.body.SpecializedTrainProg,
            RoleVocTrainInsti: req.body.RoleVocTrainInsti,
            RoleIndudsPartnershipCollab: req.body.RoleIndudsPartnershipCollab,
            SpecificTechAdvance: req.body.SpecificTechAdvance,
            ImportanceSS: req.body.ImportanceSS,
            Regulations: req.body.Regulations,
            InteDigitalPlat: req.body.InteDigitalPlat,
            SufficientEmphasis: req.body.SufficientEmphasis,
            Initiatives: req.body.Initiatives,
            EnvisionFSD: req.body.EnvisionFSD,

            // more additional fields
            NeedSpecializedTrainProg: req.body.NeedSpecializedTrainProg,
            RoleVocEdu: req.body.RoleVocEdu,
            SpecificTechSkills: req.body.SpecificTechSkills,
            AdoptionIT: req.body.AdoptionIT,
            CultSocailFactors: req.body.CultSocailFactors,
            CollabEduInsti: req.body.CollabEduInsti,
            ImportanceSoftSkills: req.body.ImportanceSoftSkills,
            PrivateSectorOrg: req.body.PrivateSectorOrg,
            MeasuresImplement: req.body.MeasuresImplement,
            EnvisionFutureWorkForce: req.body.EnvisionFutureWorkForce


        });
        
        // const newUser = new User()

        const user = await newUser.save();
        // console.log("user: ", user);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }

}

const GetAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = { GetAllUsers, Createuser }