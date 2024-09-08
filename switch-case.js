let role = 'guest';
switch(role){
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log("Moderator User");
        break;
    case 'admin':
        console.log("Admin User");
        break;
    default:
        console.log("Unknown User");
}