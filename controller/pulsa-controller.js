const Pulsa = require('../models/pulsa-model')

module.exports = {
    // Membuat data baru
    Create : (data) => 
        new Promise(async(resolve, reject) => {
            Pulsa.create(data)
            .then(()=> resolve({
                status : true,
                pesan : 'Data Pulsa berhasil disimpan'
            })).catch(()=> ({
                status : false,
                pesan : 'Data Pulsa gagal disimpan'
            }))
        }),

    // Mengambil semua data yang tersimpan
    GetAll : () => 
        new Promise((resolve, reject) => {
            Pulsa.find().then(result => {
                resolve({
                    status : true,
                    pesan : "Berhasil mengambil semua data pulsa",
                    result : result
                })
            }).catch((err) => {
                reject({
                    status : false,
                    pesan : "Gagal mengambil semua data pulsa",
                    result : err
                })
            })
        }),

    // Mengambil salah satu data 
    GetID : (id) => 
        new Promise((resolve, reject) => {
            Pulsa.findById(id).then(result => {
                if(!result) {
                    resolve({
                        status : true,
                        pesan : `Tidak menemukan id: ${id}`,
                    })                    
                }
                resolve({
                    status : true,
                    pesan : `Berhasil mengambil data id: ${id}`,
                    result : result
                })
            }).catch((err) => {
                reject({
                    status : false,
                    pesan : `Gagal mengambil data id: ${id}`,
                    result : err
                })
            })
        }),

    // Mengubah salah satu data
    Update : (id, data) => 
        new Promise ((resolve, reject) => {
            Pulsa.findByIdAndUpdate(id, data).then((result) => {
                if(!result) {
                    resolve({
                        status : true,
                        pesan : `Tidak menemukan id: ${id}`,
                    })       
                }
                resolve({
                    status: true,
                    pesan: `Berhasil Mengubah Data Pulsa id : ${id}`
                })
            }).catch((err) => {
                reject({
                    status: false,
                    pesan: `Gagal Mengubah Data Pulsa id : ${id}`
                })
            })
        }),

    // Menghapus data pulsa
    DeleteID : (id) =>
        new Promise((resolve, reject) => {
            Pulsa.findByIdAndDelete(id).then(() =>{ 
                resolve ({
                    status: true,
                    pesan : `Berhasil Menghapus Data Pulsa id : ${id}`
                })
            }).catch(() => {
                reject({
                    status: false,
                    pesan : `Gagal Menghapus Data Pulsa id : ${id}`
                })
            })
        })
}