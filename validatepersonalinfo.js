try{
    function validatepersonalinfo(){
        let dateofreport = document.forms.personalinfo.dateofreport.value;
        let nameofreporter = document.forms.personalinfo.nameofreporter.value;
        let hp = document.forms.personalinfo.hp.value;
        let fax = document.forms.personalinfo.fax.value;
        let gender = document.forms.personalinfo.gender.value;
        let home = document.forms.personalinfo.home.value;
        let city = document.forms.personalinfo.city.value;
        let zip = document.forms.personalinfo.zip.value;
        let tel = document.forms.personalinfo.tel.value;
        let alt = document.forms.personalinfo.alt.value;
        let pt = document.forms.personalinfo.pt.value;
        let name = document.forms.personalinfo.name.value;
        let dob = document.forms.personalinfo.dob.value;
        let ethnic = document.forms.personalinfo.ethnic.value;
        let race = document.forms.personalinfo.race.value;
        let sp = document.forms.personalinfo.sp.value;
        let testresult = document.forms.personalinfo.testresult.value;
        let exam = document.forms.personalinfo.exam.value;
        let dia = document.forms.personalinfo.dia.value;
        let site = document.forms.personalinfo.site.value;

        if (!dateofreport){
            document.getElementById('dateErr').innerHTML= "Date is required";
            document.forms.personalinfo.dateofreport.focus();
            return false;
        }
        

        if (!nameofreporter){
            document.getElementById('nameofreporterErr').innerHTML= "Name is required";
            document.forms.personalinfo.nameofreporter.focus();
            return false;
        }


        if (!hp){
            document.getElementById('hpErr').innerHTML= "It is Required";
            document.forms.personalinfo.hp.focus();
            return false;
        }
        if (!fax){
            document.getElementById('faxErr').innerHTML= "Contact is required";
            document.forms.personalinfo.fax.focus();
            return false;
        }

        if (!name){
            document.getElementById('nameErr').innerHTML= "Name is required";
            document.forms.personalinfo.name.focus();
            return false;
        }
        if (!dob){
            document.getElementById('dobErr').innerHTML= "Date is required";
            document.forms.personalinfo.dob.focus();
            return false;
        }
        if (!gender){
            document.getElementById('genderErr').innerHTML= "gender is required";
            document.forms.personalinfo.gender.focus();
            return false;
        }
        if(!ethnic){
            document.getElementById('ethnicErr').innerHTML= "Ethnicity is required";
            document.forms.personalinfo.ethnic.focus();
        }
        if(!race){
            document.getElementById('raceErr').innerHTML= "Race is required";
            document.forms.personalinfo.race.focus();
        }
        if(!sp){
            document.getElementById('spErr').innerHTML= "This is required";
            document.forms.personalinfo.sp.focus();
        }
        if (!testresult){
            document.getElementById('testresultErr').innerHTML= "It is Required";
            document.forms.personalinfo.testresult.focus();
            return false;
        }
        if (!exam){
            document.getElementById('examErr').innerHTML= "It is Required";
            document.forms.personalinfo.exam.focus();
            return false;
        }
        if (!dia){
            document.getElementById('diaErr').innerHTML= "It is Required";
            document.forms.personalinfo.dia.focus();
            return false;
        }
        if (!site){
            document.getElementById('siteErr').innerHTML= "It is Required";
            document.forms.personalinfo.site.focus();
            return false;
        }
        function validatefn(){
            let namepattern = /^[A-Za-z\s]*$/;
            let name = document.forms.personalinfo.name.value;
            if(name){
                let x = namepattern.test(name);
                if(x==false){
                    document.getElementById('nameErr').innerHTML ="<br>Name can only contain letters and white space"
                }
            }
            
           
  
        }




        
    }

}
catch(err){
    window.alert(err.message);

}
