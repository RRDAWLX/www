let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#mainCanvas')
});
renderer.setClearColor(0x000000);
let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(60, 400 / 300, 0.1, 10);
camera.position.set(4, 4, 4);
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(camera);


// plane
let plane1 = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    new THREE.MeshBasicMaterial({
        color: 0xff0000,
        side: THREE.DoubleSide
    }));
scene.add(plane1);
let plane2 = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        side: THREE.DoubleSide
    }));
plane2.rotation.x = Math.PI / 2;
scene.add(plane2);
let plane3 = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    new THREE.MeshBasicMaterial({
        color: 0x0000ff,
        side: THREE.DoubleSide
    }));
plane3.rotation.y = Math.PI / 2;
scene.add(plane3);

// path
let path1 = new THREE.Mesh(
    new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(6, 0, 0)),
    new THREE.MeshBasicMaterial({
        color: 0xffff00
    })
);
scene.add(path1);

// cube
let cube = new THREE.Mesh(
    new THREE.CubeGeometry(1, 2, 3),
    new THREE.MeshBasicMaterial({
        color: 0xaabbcc,
        wireframe: true
    })
);
scene.add(cube);

renderer.render(scene, camera);
