// students.js

let students = [];
let nextId = 1;

exports.addStudent = (req, res) => {
    const { fullName, code, fieldOfStudies } = req.body;
    const newStudent = {
        id: nextId,
        fullName,
        code,
        fieldOfStudies
    };
    students.push(newStudent);
    nextId++;
    res.redirect('/success');
};

exports.getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success', { 
        title: 'Success', 
        message: 'Student has been added with success!' 
    });
};

exports.getAddNewStudentPage = (req, res) => {
    res.render('Home', { title: 'Add new student' });
};

exports.getStudentsListPage = (req, res) => {
    res.render('List', { 
        title: 'List', 
        students 
    });
};

exports.getStudentsListPage = (req, res) => {
    res.render('List', { 
        pageTitle: 'List', 
        students 
    });
};
