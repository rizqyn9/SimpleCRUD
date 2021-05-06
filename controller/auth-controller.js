const User = require('../models/auth-model')
const bcrypt = require('bcrypt')


module.exports = {
    register : (data) =>
        new Promise((resolve, reject) => {
            // Melakukan pengecekan daftar username tersedia
            User.findOne({
                UserName: data.UserName
            }).then(result => {
                if (result) {
                    resolve({
                        status: false,
                        pesan: `Username : ${data.UserName} Sudah Terdaftar`
                    })
                }else {
                    // Jika Tidak ada lnajut proses enkripsi password
                    bcrypt.hash(data.Password, 10, (err, hash) => {
                        data.Password = hash
                        // Menyimpan data user kedalam database
                        User.create(data)
                        .then(() => {
                            resolve({
                                status: true,
                                pesan: `${data.UserName} berhasil daftar`
                            })
                        }).catch((e) => {
                            reject({
                                status: false,
                                pesan: `${data.UserName} gagal daftar`
                            })
                        })
                    })
                }
            })
        }),

    login : (data) =>
        new Promise((resolve, reject) =>{
            User.findOne({
                UserName: data.UserName
            }).then(user => {
                if (user) {
                    if (bcrypt.compareSync(data.Password, user.Password)){
                        resolve({
                            status: true,
                            pesan: `Berhasil masuk ${user.UserName}`
                        })
                    }else {
                        reject ({
                            status: false,
                            pesan: `Gagal masuk ${user.UserName}`
                        })
                    }
                }else {
                    reject ({
                        status: false,
                        pesan: `${data.UserName} tidak terdaftar`
                    })
                }
            })
        })
}
