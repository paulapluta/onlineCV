$(function() {
    let element = $('#container-01');
    let config = { backgroundColor: '#f6f6f6' };
    let viewer = $3Dmol.createViewer( element, config );
    let pdbUri = '_content/structure/3ecr.pdb';
    jQuery.ajax( pdbUri, {
        success: function(data) {
            let v = viewer;
            v.addModel( data, "pdb" );                       /* load data */
            v.setStyle({}, {cartoon: {color: 'spectrum'}});  /* style all atoms */
            v.setStyle({resi: [365]}, {stick: {color: 'spectrum'}});
            v.zoomTo();                                      /* set camera */
            v.render();                                      /* render scene */
            v.zoom(0.9, 1000);
            $(".mol-container-01").addClass("mol-con");      /* slight zoom */
        },
        error: function(hdr, status, err) {
            console.error( "Failed to load PDB " + pdbUri + ": " + err );
        },
    });
});


$(function() {
    let element = $('#container-02');
    let config = { backgroundColor: '#f6f6f6' };
    let viewer = $3Dmol.createViewer( element, config );
    let pdbUri = '_content/structure/2zw3.pdb';
    jQuery.ajax( pdbUri, {
        success: function(data) {
            let v = viewer;
            v.addModel( data, "pdb" );
            v.setStyle({chain: 'A'}, {cartoon: {color: 'red'}});
            v.setStyle({chain: 'B'}, {cross: {color: 'grey'}});
            v.setStyle({chain: 'C'}, {cross: {color: 'grey'}});
            v.setStyle({chain: 'D'}, {cross: {color: 'grey'}});
            v.setStyle({chain: 'E'}, {cross: {color: 'grey'}});
            v.setStyle({chain: 'F'}, {cross: {color: 'grey'}});
            v.zoomTo();
            v.render();
            v.zoom(0.9, 1000);
            $(".mol-container-02").addClass("mol-con");
        },
        error: function(hdr, status, err) {
            console.error( "Failed to load PDB " + pdbUri + ": " + err );
        },
    });
});
