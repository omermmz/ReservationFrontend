import React from 'react'
import {useRouter} from "next/router";


export const base = 'http://localhost:8080/api';

let API = {
    login: {
        id: 1001,
        url: base + '/user/whoAmI'
    },
    whoAmICoUser: {
        id: 1002,
        url: base + '/companyuser/whoAmI'
    },
    initializeCoUser: {
        id: 1003,
        url: base + '/companyuser'
    },
    city: {
        id: 1004,
        url: base + '/city'
    },
    place: {
        id: 1005,
        url: base + '/place'
    },
    reservation: {
        id: 1006,
        url: base + '/reservation'
    },
    initializeResUser: {
        id: 1007,
        url: base + '/v1/reservationuser'
    },
    logout: {
        id: 1008,
        url: 'http://localhost:8080/api/user/logout'
    },
    getUserInfo: {
        id: 1009,
        url: base + '/user/getUserInfo'
    },
    updateUserInfo: {
        id: 1010,
        url: base + '/user/updateUserInfo'
    },
    updatePassword: {
        id: 1011,
        url: base + '/user/updatePassword'
    },
    updateMail: {
        id: 1012,
        url: base + '/user/updateMail'
    },
    getAllCompanyPlace: {
        id: 1013,
        url: base + '/companyuser/getAllPlace'
    }
}

export const logout = async (token) => {
    let api = API.logout;
    var url = api.url;
    var id = api.id;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Cookie': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        console.log(response.status)
        return true;
        //  const responseJson = await response.json();
        //  return responseJson;
    } catch (error) {
        return 'networkError';
    }
}

export const getAllCity = async () => {
    let api = API.city;
    var url = api.url;
    var id = api.id;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return 'networkError';
    }
}

export const getAllPlaces = async () => {
    let api = API.place;
    var url = api.url;
    var id = api.id;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return 'networkError';
    }
}

export const getPlacesByCityName = async (cityName) => {
    let api = API.place;
    var url = api.url + "/getByCity/" + cityName;
    var id = api.id;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return 'networkError';
    }
}

export const getPlacesByCityAndProvince = async (cityName, provinceName) => {
    let api = API.place;
    var url = api.url + "/getByCity/" + cityName + "/" + provinceName;
    var id = api.id;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return 'networkError';
    }
}

export const getPlacesByCityBetweenPrice = async (cityName, prices) => {
    let api = API.place;
    var url = api.url + "/getByCity/" + cityName + "/" + prices;
    var id = api.id;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return 'networkError';
    }
}

export const getPlacesByCityAndProvinceWithBetweenPrice = async (cityName, provinceName, prices) => {
    let api = API.place;
    var url = api.url + "/getByCity/" + cityName + "/" + provinceName + "/" + prices;
    var id = api.id;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return 'networkError';
    }
}

export const getAllPlacesWithBetweenPrice = async (prices) => {
    let api = API.place;
    var url = api.url + "/" + prices;
    var id = api.id;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return 'networkError';
    }
}

export const getAllEmptyTime = async (date, placeId) => {
    let api = API.reservation;
    var url = api.url + "/getemptytime";
    var id = api.id;

    try {
        const response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "date": date,
                    "placeId": placeId,
                    "status": "Active"
                }),
                credentials: 'include'
            }
        );
        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        console.log(error)
        return 'networkError';
    }
}

export const updateReservation = async (reservationId, newDate, newTime, placeId, userId) => {
    let api = API.reservation;
    var url = api.url + "/update";
    var id = api.id;

    try {
        const response = await fetch(url,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": reservationId,
                    "date": newDate,
                    "time": newTime,
                    "placeId": placeId,
                    "userId": userId
                }),
                credentials: 'include'
            }
        );
        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        console.log(error)
        return 'networkError';
    }
}

export const loginForUser = async (id, userName, password) => {
    let api = API.city;
    var url = api.url + "/" + id;

    try {
        const response = await fetch(url,
            {

                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + window.btoa(userName + ':' + password),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        );
        console.log(response.status.toString());
        const responseJson = await response.json();
        console.log(responseJson.status);
        return responseJson;
    } catch (error) {
        console.log({error: error});
        return 'networkError';
    }
}


export const login = async (userName, password) => {
    let api = API.login;
    var url = api.url;
    var id = api.id;
    console.log({api: api})

    try {
        const response = await fetch(url,
            {

                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + window.btoa(userName + ':' + password),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        );
        console.log(response.status.toString());
        const responseJson = await response.json();
        console.log(responseJson.status);
        return responseJson;
    } catch (error) {
        console.log({error: error});
        return 'networkError';
    }

}

export const addPlace = async (placeName, companyId, price, city, province, district, mahalle, cityId, provinceId, addressNo, telNo, kapora, startTime, endTime) => {
    let api = API.place;
    var url = api.url;
    var id = api.id;

    try {
        const response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "status": "active",
                    "company_id": companyId,
                    "type": "Halisaha",
                    "name": placeName,
                    "price": price,
                    "city_id": cityId,
                    "province_id": provinceId,
                    "address": district + " Semti, " + mahalle + ", No: " + addressNo + ", " + city.toUpperCase() + "/" + province,
                    "phone_number": telNo,
                    "kapora": kapora,
                    "start_time": startTime,
                    "end_time": endTime
                }),
                credentials: 'include'
            }
        );
        return response;

    } catch (error) {
        return 'networkError';
    }

}

export const addCity = async (cityName, provinceName) => {
    let api = API.city;
    var url = api.url;
    var id = api.id;

    try {
        const response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": cityName,
                    "provinceName": provinceName
                }),
                credentials: 'include'
            }
        );

        const responseJson = await response.json();
        console.log("status: " + response);
        console.log("status2: " + responseJson);
        return responseJson;

    } catch (error) {
        return 'networkError';
    }
}

export const addReservation = async (date, time, placeId, userId) => {
    let api = API.reservation;
    var url = api.url;
    var id = api.id;

    try {
        const response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "date": date,
                    "time": time,
                    "placeId": placeId,
                    "userId": userId
                }),
                credentials: 'include'
            }
        );
        return response;
    } catch (error) {
        return 'networkError';
    }
}
export const getMyReservations = async (userId) => {
    let api = API.reservation;
    var url = api.url + "/myReservations/" + userId;
    var id = api.id;

    try {
        const response = await fetch(url,
            {

                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        );
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return 'networkError';
    }
}

export const deleteReservation = async (reservationId) => {
    let api = API.reservation;
    var url = api.url + "/" + reservationId;
    var id = api.id;

    try {
        const response = await fetch(url,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        );
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return 'networkError'
    }
}

export const addCompanyUser = async (companyName, userName, userSurname, userBirthdate, telNo, email, password) => {
    let api = API.initializeCoUser;
    var url = api.url;
    var id = api.id;

    try {
        const response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "companyStatus": "Active",
                    "companyName": companyName,
                    "type": "Company Employee",
                    "name": userName,
                    "surname": userSurname,
                    "birthdate": userBirthdate,
                    "telNo": telNo,
                    "email": email,
                    "password": password
                }),
                credentials: 'include'
            }
        );
        console.log(response.status)
        const responseJson = await response.json();
        console.log(responseJson.status)
        return responseJson;
    } catch (error) {
        return 'networkError';
    }
}

export const addReservationUser = async (userName, userSurname, userBirthdate, phoneNumber, email, password) => {
    let api = API.initializeResUser;
    var url = api.url;
    var id = api.id;

    try {
        const response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "status": "Active",
                    "type": "Reservation User",
                    "name": userName,
                    "surname": userSurname,
                    "birthdate": userBirthdate,
                    "phoneNumber": phoneNumber,
                    "email": email,
                    "password": password
                }),
                credentials: 'include'
            }
        );
        console.log(response.status)
        const responseJson = await response.json();
        console.log(responseJson.status)
        return responseJson;
    } catch (error) {
        return 'networkError';
    }
}

export const request = async (token) => {
    let api = API.login;
    var url = api.url;
    var id = api.id;
    console.log({api: api})

    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Cookie': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        );
        console.log(response.status.toString());
        const responseJson = await response.json();
        console.log(responseJson.status);
        return responseJson;
    } catch (error) {
        console.log({error: error});
        return 'networkError';
    }
}

export const whoAmI = async (userName, password) => {
    let api = API.login;
    var url = api.url;
    var id = api.id;
    console.log({api: api})

    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + window.btoa(userName + ':' + password),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: "include"
            }
        );

        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        console.log({error: error});
        return 'networkError';
    }
}

export const whoAmICoUserWithToken = async (token) => {
    let api = API.whoAmICoUser;
    var url = api.url;
    var id = api.id;

    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Cookie': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: "include"
            }
        );


        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return 'networkError';
    }
}

export const whoAmIWithToken = async (token) => {
    let api = API.login;
    var url = api.url;
    var id = api.id;
    console.log({api: api})

    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Cookie': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: "include"
            }
        );


        const responseJson = await response.json();
        return responseJson;


    } catch (error) {
        return 'networkError'

    }
}

export const getUserInfo = async (token) => {
    let api = API.getUserInfo;
    var url = api.url;
    var id = api.id;
    console.log({api: api})

    try {
        const response = await fetch(url,
            {
                method: 'GET',
                headers: {
                    'Cookie': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: "include"
            }
        );
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return 'networkError'

    }
}

export const updateUserInfo = async (token, companyName, userName, userSurname, userBirthdate, phoneNumber) => {
    let api = API.updateUserInfo;
    var url = api.url;
    var id = api.id;
    console.log({api: api})

    try {
        const response = await fetch(url,
            {
                method: 'PUT',
                headers: {
                    'Cookie': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "companyName": companyName,
                    "userName": userName,
                    "userSurname": userSurname,
                    "birthdate": userBirthdate,
                    "phoneNumber": phoneNumber,
                }),
                credentials: "include"
            }
        );
        return response;
    } catch (error) {
        console.log(error)
        return 'networkError'

    }
}

export const updatePassword = async (token, lastPassword, newPassword) => {
    let api = API.updatePassword;
    var url = api.url;
    var id = api.id;
    console.log({api: api})

    try {
        const response = await fetch(url,
            {
                method: 'PUT',
                headers: {
                    'Cookie': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "lastPassword": lastPassword,
                    "newPassword": newPassword,
                }),
                credentials: "include"
            }
        );
        return response;
    } catch (error) {
        return 'networkError'

    }
}

export const getPlaceReservations = async (placeFieldId, token) => {
    let api = API.reservation;
    var url = api.url + '/getPlaceReservations';
    var id = api.id;

    try {
        const response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Cookie': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "placeFieldId": placeFieldId
                }),
                credentials: "include"
            })
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return 'networkError'
    }

}

export const getAllCompanyPlace = async (companyId, token) => {
    let api = API.getAllCompanyPlace;
    var url = api.url;
    var id = api.id;

    try {
        const response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Cookie': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "companyId": companyId
                }),
                credentials: "include"
            })
        console.log(response)
        const respJson = await response.json();
        console.log(respJson);
        return respJson;
    } catch (error) {
        return 'networkError'
    }
}

export const updateMail = async (token, newMail) => {
    let api = API.updateMail;
    var url = api.url;
    var id = api.id;
    console.log({api: api})

    try {
        const response = await fetch(url,
            {
                method: 'PUT',
                headers: {
                    'Cookie': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "newMail": newMail
                }),
                credentials: "include"
            }
        );
        if (response.status === 500) {
            const responseJson = await response.json();
            return responseJson;
        }
        return response;
    } catch (error) {
        return 'networkError'

    }
}






