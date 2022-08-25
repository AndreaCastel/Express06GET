const validateMovie = (req, res, next) => {
    const { title, director, year, color, duration } = req.body;
    const errors = [];

    if (title == null) {
        errors.push({ field: "title", message: "title required"});
    }
    else if (title.length >= 255) {
        errors.push({ field: "title", message: "Too LOOOOONNNGGG !!! 255 characters max !"});
    }
    if (director == null) {
        errors.push({ field: "director", message: "director required"});
    }
    else if (director.length >= 255) {
        errors.push({ field: "director", message: "Too LOOOOONNNGGG !!! 255 characters max !"});
    }
    if (year == null) {
        errors.push({ field: "year", message : "year required"});
    }
    else if (year.length >= 255) {
        errors.push({ field: "year", message: "Too LOOOOONNNGGG !!! 255 characters max !"});
    }
    if (color == null) {
        errors.push({ field: "color", message: "color required"});
    }
    else if (color.length >= 255) {
        errors.push({ field: "color", message: "Too LOOOOONNNGGG !!! 255 characters max !"});
    }
    if (duration == null) {
        errors.push({ field: "duration", message: "duration required"});
    } 
    else if (duration.length >= 255) {
        errors.push({ field: "duration", message: "Too LOOOOONNNGGG !!! 255 characters max !"});
    }
    if (errors.length) {
        res.status(422).json({ validationErrors: errors});
    }
    else {
        next();
    }
};


const validateUser = (req, res, next) => {
    const { firstname, lastname, email, city, language } = req.body;
    const errors = [];

    if (firstname == null) {
        errors.push({ field: "firstname", message: "firstname required"});
    }
    else if (firstname.length >= 255) {
        errors.push({ field: "firstname", message: "Too LOOOOONNNGGG !!! 255 characters max !"});
    }
    if (lastname == null) {
        errors.push({ field: "lastname", message: "lastname required"});
    }
    else if (lastname.length >= 255) {
        errors.push({ field: "lastname", message: "Too LOOOOONNNGGG !!! 255 characters max !"});
    }
    if (email == null) {
        errors.push({ field: "email", message : "email required"});
    }
    else if (email.length >= 255) {
        errors.push({ field: "email", message: "Too LOOOOONNNGGG !!! 255 characters max !"});
    }
    if (city == null) {
        errors.push({ field: "city", message: "city required"});
    }
    else if (city.length >= 255) {
        errors.push({ field: "city", message: "Too LOOOOONNNGGG !!! 255 characters max !"});
    }
    if (language == null) {
        errors.push({ field: "language", message: "language required"});
    } 
    else if (duration.length >= 255) {
        errors.push({ field: "language", message: "Too LOOOOONNNGGG !!! 255 characters max !"});
    }
    if (errors.length) {
        res.status(422).json({ validationErrors: errors});
    }
    else {
        next();
    }
};


module.exports = {
    validateMovie,
    validateUser,
};

