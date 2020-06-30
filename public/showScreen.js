const donors = document.querySelectorAll('section.donors div.donor')


    const tamanhoDonors = donors.length

    if(tamanhoDonors >= 4){
    console.log(tamanhoDonors)
    for(donor in donors){
        let tamanhoDonors = tamanhoDonors - 1
            console.log(tamanhoDonors)
    }
}
