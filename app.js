class MenuSingleton {
    constructor() {
        if (MenuSingleton.instance) {
            return MenuSingleton.instance;
        }

        this.menuItems = ["Café", "Té", "Chocolate"];
        MenuSingleton.instance = this;
    }

    getMenuItems() {
        return this.menuItems;
    }
}

// Factory para crear bebidas
class BeverageFactory {
    static createBeverage(type) {
        switch (type) {
            case "Café":
                return new Coffee();
            case "Té":
                return new Tea();
            case "Chocolate":
                return new Chocolate();
            default:
                throw new Error("Tipo de bebida no reconocido");
        }
    }
}

class Coffee {
    constructor() {
        this.name = "Café";
        this.description = "Una deliciosa taza de café recién hecho.";
    }
}

class Tea {
    constructor() {
        this.name = "Té";
        this.description = "Una relajante taza de té.";
    }
}

class Chocolate {
    constructor() {
        this.name = "Chocolate";
        this.description = "Un cálido vaso de chocolate.";
    }
}

document.getElementById("menuButton").addEventListener("click", function () {
    const menuContainer = document.getElementById("menuContainer");
    const menuList = document.getElementById("menuList");

    const menu = new MenuSingleton();
    const items = menu.getMenuItems();

    menuList.innerHTML = "";

    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;

        listItem.addEventListener("click", () => {
            const beverage = BeverageFactory.createBeverage(item);
            alert(`Has elegido: ${beverage.name}\nDescripción: ${beverage.description}`);
        });

        menuList.appendChild(listItem);
    });

    menuContainer.style.display = "block";
});
