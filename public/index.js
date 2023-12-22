let $vehicleResults = $('#vehicleResults');
let $ownerResults = $('#ownerResults');
let $vehicleUserForm = $('#vehicleUser-form');
let $userSearch = $('#vehicleSearch');

// let vehiclesArr = [];

// const fetchVehicleInfo = (url) => {
//     fetch(url)
//     .then(response => response.json())
//     .then(vehicles => {
//         vehicles.forEach(vehicle => vehiclesArr.push(vehicle))
//         renderVehicleList(vehiclesArr)
//     })
// }

// function getExactVehicle() {
//     $.get('/api/vehicles', function(data) {
//         for (let i = 0; i < data.length; i++) {
//             let currentVehicle = data[i];
//             let licensePlate = currentVehicle.licenseplate;
//             console.log(licensePlate);
//         }
//     })
// }

$vehicleUserForm.on('submit', async (event) => {
    event.preventDefault();
    $vehicleResults.empty();

    try {
        const licensePlate = $('#vehicleSearch').val();
        const response = await $.get(`/api/vehicles/license/${licensePlate}`);
        const currentVehicle = response[0];
        //for (const details of currentVehicle) {
            let $currentVehicleInfo = $('<span class="currentVehicleInfo"></span>');
            let $vehicleId = $(`<span class="vehicleId">ID: ${currentVehicle.id} </span>`);
            let $vehicleColor = $(`<span class="vehicleColor">Color: ${currentVehicle.color} </span>`);
            let $licensePlate = $(`<span class="licensePlate">License Plate: ${currentVehicle.licenseplate} </span>`);
            let $vehicleMake = $(`<span class="vehicleMake">Vehicle Make: ${currentVehicle.make} </span>`);
            let $model = $(`<span class="model">Model: ${currentVehicle.model} </span>`);
            let $year = $(`<span class="year">Year: ${currentVehicle.modelyear} </span>`);
            let $ownerId = $(`<span class="ownerId">Owner ID: ${currentVehicle.owner_id} </span>`);

            $currentVehicleInfo.append($vehicleId, $vehicleColor, $licensePlate, $vehicleMake, $model, $year, $ownerId);
            $vehicleResults.append($currentVehicleInfo);
        //}
    } catch (error) {
        console.error(error);
    }
});

let $ownerUserForm = $('#ownerUser-form');
let $ownerSearch = $('#ownerSearch');

$ownerUserForm.on('submit', async (event) => {
    event.preventDefault();
    $ownerResults.empty();
    
    try {
        const ownerId = $('#ownerSearch').val();
        const response = await $.get(`/api/owners/${ownerId}`)
        const currentOwner = response[0];
    
            let $currentOwnerInfo = $('<span class="currentOwnerInfo"></span>');
            let $id = $(`<span class="id">ID: ${currentOwner.id} </span>`);
            let $firstName = $(`<span class="firstName">First Name: ${currentOwner.firstname} </span>`);
            let $lastName = $(`<span class="lastName">Last Name: ${currentOwner.lastname} </span>`);
            $currentOwnerInfo.append($id, $firstName, $lastName);
            $ownerResults.append($currentOwnerInfo);
    } catch (error) {
        console.error(error);
    }
});