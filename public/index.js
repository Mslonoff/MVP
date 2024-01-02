let $vehicleResults = $('#vehicleResults');
let $ownerResults = $('#ownerResults');
let $vehicleUserForm = $('#vehicleUser-form');
let $userSearch = $('#vehicleSearch');
let $licensePlates = $('#licensePlates');
let $allLicensePlates = $('#allLicensePlates');

// let hideForm = document.getElementById('licensePlates');
// let display = 0;

// function hideShow() {
//     if (display === 1) {
//         hideForm.style.display = 'block';
//         display = 0;
//     } else {
//         hideForm.style.display = 'none';
//         display = 1;
//     }
// }

const $licensePlatesContainer = $('#allLicensePlatesContainer');
let isDataVisible = false;

$('#licenses').on('click', async (event) => {
//
    try {
        if (isDataVisible) {
            $licensePlatesContainer.empty();
        } else {
          const response = await $.get('/api/license');
          const allLicensePlates = response.map(license => license.license);
          console.log('allLicensePlates: ', allLicensePlates);

          $licensePlatesContainer.empty();
          
          for (let currentLicense of allLicensePlates) {
            console.log('currentLicense:', currentLicense);
            const $currentLicense = $(`<h6 class="license">${currentLicense}</h3>`);
            $licensePlatesContainer.append($currentLicense);
          }
        }
        isDataVisible = !isDataVisible;
    } catch (error) {
        console.error(error);
    }
});
// 
$vehicleUserForm.on('submit', async (event) => {
    event.preventDefault();
    $vehicleResults.empty();
    const licensePlate = $('#vehicleSearch').val();
    // console.log(licensePlate);
    // if the license plate entered is not a license plate in the database, return 'sorry no results'
    if (licensePlate) {
        let $currentVehicleInfo = $('<span class="currentVehicleInfo"></span>');
        try {
          const response = await $.get(`/api/vehicles/license/${licensePlate}`);
          console.log('license plate: ', response[0].licenseplate);
          const currentVehicle = response[0];
          console.log('current vehicle:', currentVehicle);
        
            let $vehicleId = $(`<span class="vehicleId">ID: ${currentVehicle.id} </span>`);
            let $vehicleColor = $(`<span class="vehicleColor">Color: ${currentVehicle.color} </span>`);
            let $licensePlate = $(`<span class="licensePlate">License Plate: ${currentVehicle.licenseplate} </span>`);
            let $vehicleMake = $(`<span class="vehicleMake">Vehicle Make: ${currentVehicle.make} </span>`);
            let $model = $(`<span class="model">Model: ${currentVehicle.model} </span>`);
            let $year = $(`<span class="year">Year: ${currentVehicle.modelyear} </span>`);
            let $ownerId = $(`<span class="ownerId">Owner ID: ${currentVehicle.owner_id} </span>`);

            $currentVehicleInfo.append($vehicleId, $vehicleColor, $licensePlate, $vehicleMake, $model, $year, $ownerId);
            $vehicleResults.append($currentVehicleInfo);

        } catch (error) {
          console.error(error);
        }
    } else {
      console.log('sorry no results found');
      let $noResultsFound = $(`<span class="noResultsFound">ID: No Results Found</span>`);
      $currentVehicleInfo.append($noResultsFound);
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