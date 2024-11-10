import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "./styleIndex.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";


const MinecraftServerPlans = () => {
  const serverTypes = {
    PASIVOS: [
      {
        name: "Axolotl",
        price: "1.500.000",
        image: "resource/imgIconsRango/AxolotlFace.webp",
        specs: {
          ram: "25GB",
          players: "Ilimitados",
          storage: "Ilimitado",
          connection: "1Gbps",
        },
      },
      {
        name: "Armadillo",
        price: "1.000.000",
        image: "/resource/imgIconsRango/ArmadilloFace.webp",
        specs: {
          ram: "18GB",
          players: "Ilimitados",
          storage: "Ilimitado",
          connection: "1Gbps",
        },
      },
      {
        name: "Allay",
        price: "800.000",
        image: "/resource/imgIconsRango/AllayFace.webp",
        specs: {
          ram: "16GB",
          players: "Ilimitados",
          storage: "Ilimitado",
          connection: "1Gbps",
        },
      },
    ],
    NEUTRALES: [
      {
        name: "Enderman",
        price: "700.000",
        image: "/resource/imgIconsRango/EndermanFace.webp",
        specs: {
          ram: "12GB",
          players: "50",
          storage: "Ilimitado",
          connection: "1Gbps",
        },
      },
      {
        name: "Iron Golem",
        price: "600.000",
        image: "/resource/imgIconsRango/IronGolemFace.webp",
        specs: {
          ram: "8GB",
          players: "30",
          storage: "Ilimitado",
          connection: "1Gbps",
        },
      },
      {
        name: "Drowned",
        price: "500.000",
        image: "/resource/imgIconsRango/DrownedFace.webp",
        specs: {
          ram: "6GB",
          players: "20",
          storage: "Ilimitado",
          connection: "1Gbps",
        },
      },
    ],
    HOSTILES: [
      {
        name: "Warden",
        price: "300.000",
        image: "/resource/imgIconsRango/WardenFace.webp",
        specs: {
          ram: "4GB",
          players: "20",
          storage: "Limitado",
          connection: "1Gbps",
        },
      },
      {
        name: "Creeper",
        price: "200.000",
        image: "/resource/imgIconsRango/CreeperFace.webp",
        specs: {
          ram: "2GB",
          players: "15",
          storage: "Limitado",
          connection: "1Gbps",
        },
      },
      {
        name: "Skeleton",
        price: "100.000",
        image: "/resource/imgIconsRango/SkeletonFace.webp",
        specs: {
          ram: "1GB",
          players: "10",
          storage: "Limitado",
          connection: "1Gbps",
        },
      },
    ],
  };

  const ServerCard = ({ server, type }) => (
    <div className={`Server Rango-${server.name} ${type}`}>
      <div className="header-title">
        <img
          className={`img ${server.name === "Warden" ? "Warden" : ""}`}
          src={server.image}
          alt={server.name}
        />
        <h3>{server.name}</h3>
        <p>
          <span>$</span>
          {server.price}/mes
        </p>
      </div>
      <div className="card-body">
        <ul>
          <li>
          <FontAwesomeIcon icon={faCheckDouble} style={{color: "#2450f0",}} />
            <span>{server.specs.ram}</span> Minecraft Server
          </li>
          <li>
          <FontAwesomeIcon icon={faCheckDouble} style={{color: "#2450f0",}} />
          Espacio de Jugadores{" "}
            {server.specs.players}
          </li>
          <li>
          <FontAwesomeIcon icon={faCheckDouble} style={{color: "#2450f0",}} />
          Almacenamiento{" "}
            <span>SSD</span> {server.specs.storage}
          </li>
          <li>
          <FontAwesomeIcon icon={faCheckDouble} style={{color: "#2450f0",}} />
          Conexión de{" "}
            <span>{server.specs.connection}</span>
          </li>
          <li>
          <FontAwesomeIcon icon={faCheckDouble} style={{color: "#2450f0",}} />
          Ancho de Banda sin Restricción
          </li>
          <li>
          <FontAwesomeIcon icon={faCheckDouble} style={{color: "#2450f0",}} />
          Promoción Especial de{" "}
            <a href="">Enjin</a> &amp; <a href="">Buycraft</a>
          </li>
          <li>
          <FontAwesomeIcon icon={faCheckDouble} style={{color: "#2450f0",}} />
          Chat de Soporte en Vivo
          </li>
          <li>
          <FontAwesomeIcon icon={faCheckDouble} style={{color: "#2450f0",}} />
          Minecraft Pocket Edition
          </li>
          <li>
          <FontAwesomeIcon icon={faCheckDouble} style={{color: "#2450f0",}} />
          Panel de Control Multicraft
          </li>
        </ul>
      </div>
      <Link to="/shop-server" className="btn btn-shop">
        <FontAwesomeIcon icon={faShop} />{" "}
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="Marca max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <img
            src="/resource/img/Icon-SaleCraft.png"
            alt="icon"
            className="h-12 w-auto"
          />
          <h1 className="text-3xl font-bold">SALECRAFT</h1>
          <div className="navegation">
            <Link to="/register" className="link link-Cc">
              Crear cuenta
            </Link>
            <Link to="/login" className="link link-Is">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </header>

      <div className="separador">
        <p>Planes de servicios para tus servidores de Minecraft</p>
      </div>

      <div className="container-type-rango">
        {Object.entries(serverTypes).map(([type, servers]) => (
          <div key={type}>
            <div className="separador-rangos"></div>
            <h3 className="title-clase">{type}</h3>
            <div className={`Type Type-${type.toLowerCase()}`}>
              {servers.map((server) => (
                <ServerCard
                  key={server.name}
                  server={server}
                  type={type.toLowerCase()}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
          <p>
            <Link to="#" className="text-blue-600 hover:text-blue-800">
              Términos y condiciones
            </Link>{" "}
            |{" "}
            <Link to="#" className="text-blue-600 hover:text-blue-800">
              Política de privacidad
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MinecraftServerPlans;
