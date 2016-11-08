export class ChildRouter {

    openNav() {
        document.getElementById("navbar-app").style.width = "250px";
    }

    closeNav() {
        document.getElementById("navbar-app").style.width = "0";
    }
}
