

module.exports = function(user){
    return Boolean(user.username && user.password && typeof user.password === "string");
}