import {json} from '@sveltejs/kit';

export function GET(){
    return json({message: "Hello from server jjj"});
}