let $vehicleResults = $('#vehicleResults');
let $ownerResults = $('#ownerResults');
let $vehicleUserForm = $('#vehicleUser-form');
let $userSearch = $('#vehicleSearch');

$vehicleUserForm.on('submit', (event) => {
    event.preventDefault();
    $vehicleResults.empty();

    $.get('/api/vehicles', function(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let currentVehicle = data[i];
            console.log(currentVehicle);
    
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
        }
    })

});

let $ownerUserForm = $('#ownerUser-form');
let $ownerSearch = $('#ownerSearch');

$ownerUserForm.on('submit', (event) => {
    event.preventDefault();
    $ownerResults.empty();


    $.get('/api/owners', function(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let currentOwner = data[i];
            console.log(currentOwner);
    
            let $currentOwnerInfo = $('<span class="currentOwnerInfo"></span>');
            let $id = $(`<span class="id">ID: ${currentOwner.id} </span>`);
            let $firstName = $(`<span class="firstName">First Name: ${currentOwner.firstname} </span>`);
            let $lastName = $(`<span class="lastName">Last Name: ${currentOwner.lastname} </span>`);
            $currentOwnerInfo.append($id, $firstName, $lastName);
            $ownerResults.append($currentOwnerInfo);
        }
    })

});