import React from 'react'



type Types = {
    email: {
        regex: RegExp;
        message: string;
    };
    senha: {
        regex: RegExp;
        message: string;
    };
}

const types = {
    email: {
        regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Email inválido'
    },

    senha: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        message: `A senha deve conter um digito, uma letra minúscula, uma letra maiúscula e um caractere especial`
    }
  }


function useForm(type: string | boolean) {
   const [value, setValue] = React.useState('');
   const [erro, setErro] = React.useState<string | null>(null)
   

   
   function validate(value: string){
      if(type === false) return true
      if(value.length === 0){
         setErro('Preencha o campo!')
         return false
      }else if(typeof type === 'string' && types[type as keyof Types] && !types[type as keyof Types].regex.test(value)){
        setErro(types[type as keyof Types].message)
        return false
      }else{
        setErro(null)
        return true
      }
   }

   
   const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        if(erro) validate(event.target.value)
        setValue(event.target.value)
   }



  return (
    {
        value,
        setValue,
        erro,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value)
    }
  )
}

export default useForm
