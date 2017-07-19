let renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('mainCanvas')
});
renderer.setClearColor(0x000000);

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
camera.position.set(0, 0, 5);
scene.add(camera);

let cube = new THREE.Mesh(
    new THREE.CubeGeometry(1, 2, 3),
    new THREE.MeshBasicMaterial({
        color: 0xff0000
    })
);
scene.add(cube);

renderer.render(scene, camera);
