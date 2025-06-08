function calculateBodaFare(distanceinkm) {
   const baseFare = 50; 
   const chargeperkm = 15;
   const totalfare = baseFare +(distanceinkm * chargeperkm);

    console.log('Ukokwote?Ioni $ {distanceinkm} km');
    console.log('Ukikalia Pikipiki: KES ${baseFare}'); 
    console.log('mpaka uko: KES ${distanceinkm * chargeperkm}');
    console.log('Total${totalfare');
    console.log("Panda Pikipiki!");
}

const userinput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
const distance = parseFloat(userinput);
calculateBodaFare(distance);
 