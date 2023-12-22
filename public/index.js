$.get('/api/vehicles', function(data) {
    console.log(data);
    let $vehicleData = $('<div id="vehicleData"></div>');
    $('#main').append($vehicleData);
    for (let i = 0; i < data.length; i++) {
        let currentVehicle = data[i];
        console.log(currentVehicle);

        let $currentVehicleInfo = $('<span class="currentVehicleInfo"></span>');
        let $vehicleId = $(`<span class="vehicleId">'ID: '${currentVehicle.id}</span>`);
        let $vehicleColor = $(`<span class="vehicleColor">'Color: '${currentVehicle.color}</span>`);
        let $licensePlate = $(`<span class="licensePlate">'License Plate: '${currentVehicle.licenseplate}</span>`);
        let $vehicleMake = $(`<span class="vehicleMaker">'Vehicle Make: '${currentVehicle.make}</span>`);
        let $model = $(`<span class="model">'Model: '${currentVehicle.model}</span>`);
        let $year = $(`<span class="year">'Year: '${currentVehicle.year}</span>`);
        $currentVehicleInfo.append($vehicleId, $vehicleColor, $licensePlate, $vehicleMake, $model, $year);
        $vehicleData.append($currentVehicleInfo);
        $currentVehicleInfo.append(currentVehicle);
    }
})

$.get('/api/owners', function(data) {
    console.log(data);
    let $ownerData = $('<div id="ownerData"></div>');
    $('#main').append($ownerData);
    for (let i = 0; i < data.length; i++) {
        let currentOwner = data[i];
        console.log(currentOwner);

        let $currentOwnerInfo = $('<span class="currentOwnerInfo"></span>');
        $ownerData.append($currentOwnerInfo);
    }
})