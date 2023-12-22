$.get('/api/vehicles', function(data) {
    console.log(data);
    let $vehicleData = $('<span class="vehicleData"></span');
    $('body').append($vehicleData);
    for (let i = 0; i < data.length; i++) {
        let currentVehicle = data[i];
        console.log(currentVehicle);

        let $currentVehicleInfo = $('<span class="currentVehicleInfo"></span>');
        $vehicleData.append($currentVehicleInfo);
    }
})

$.get('/api/owners', function(data) {
    console.log(data);
    let $ownerData = $('<span class="ownerData"></span>');
    $('body').append($ownerData);
    for (let i = 0; i < data.length; i++) {
        let currentOwner = data[i];
        console.log(currentOwner);

        let $currentOwnerInfo = $('<span class="currentOwnerInfo"></span>');
        $ownerData.append($currentOwnerInfo);
    }
})