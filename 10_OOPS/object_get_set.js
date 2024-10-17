const User = {
    
            _email:"h@hcom",
            _password:"abc",

            // Underscore tells us that its sort of  a private property now .    
            get email(){
                return this._email.toUpperCase();
            },
        
            set email(value){
                this._email=value;
            },
        
            get password(){
                return this._password.toUpperCase();
            },
        
            set password(value){
                this._password=value;
            },
    }
    
    const sidhant= Object.create(User);
