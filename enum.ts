const enum  Color {
    'Red'='#ff0000',
    'Green'="#00ff00",
    'Blue'="#0000ff"
}
console.log(Color.Red)
console.log(Color.Green)
console.log(Color.Blue)

const enum  HttpStatusCode {
    Ok=200,
    PageNotFound=404,
    BadRequest=400,
    ServerError=500,
}
console.log(HttpStatusCode.Ok)
//Enums can represent different settings or modes in an application configuration.

const enum AppMode  {
    Development="Development_code",
    Testing="Testing_code",
    Production="Production_code"

}

console.log(AppMode.Testing)

//Enums can define different roles in an application, making it easier to manage user permissions.

const enum  userRole{
    Admin="admin_code",
    User="user_code",
    Moderator="moderator_code"

}

console.log(userRole.Admin)

const enum  TrafficLightState  {
    Red="stop",
    Orange="Ready",
    Green="Go"

}

console.log(TrafficLightState.Red)