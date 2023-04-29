module.exports = (sequelize, DataTypes) => {
    
    let Student = sequelize.define('Student', {

        name: {
            type : DataTypes.STRING,
        },

        starID: { 
            type: DataTypes.STRING,
        },

        present: {
            typr: DataTypes.BOOLEAN,
        }       
    })
    // force specifies whether to drop the table or not
    //true = drop table every time app reestarts. Need this setting if table changed.
    // false = keep table

    Student.sync( {force: true} ).then(() => {
        console.log('Synced student table ')
    })

    return Student
}