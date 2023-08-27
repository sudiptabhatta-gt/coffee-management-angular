import { AbstractControl } from '@angular/forms';

export function passwordMatch(password:string, confirmPassword:string){
    return function(control: AbstractControl){
        const password:string = control.get('password')?.value
        const confirmPassword:string = control.get('confirmPassword')?.value;

        if(password !== confirmPassword){
            control.get('confirmPassword')?.setErrors({mismatch: true})
        } else {
            control.get('confirmPassword')?.setErrors(null)
        }
    }
}