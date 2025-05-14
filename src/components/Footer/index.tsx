import React from "react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-100 p-6 md:p-10">
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
					<h4 className="font-bold mb-2">CONTATO</h4>
					<p>support@certopelocerto.com</p>
					<div className="flex space-x-4 mt-4">
						<a
							href="https://www.instagram.com/certopelocertostore/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-700"
						>
							{<FaInstagram size={24} />}
						</a>
						<a
							href="https://www.youtube.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-700"
						>
							{<FaYoutube size={24} />}
						</a>
						<a
							href="https://www.tiktok.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-700"
						>
							{<FaTiktok size={24} />}
						</a>
					</div>
				</div>

				<div>
					<h4 className="font-bold mb-2">INFORMAÇÃO</h4>
					<ul className="space-y-2">
						<li>
							<a href="/terms" className="no-underline hover:text-gray-700">
								Termos e Condições
							</a>
						</li>
						<li>
							<a href="/privacy" className="no-underline hover:text-gray-700">
								Proteção de dados
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h4 className="font-bold mb-2">SERVIÇO</h4>
					<ul className="space-y-2">
						<li>
							<a href="/shipping" className="no-underline hover:text-gray-700">
								Remessa
							</a>
						</li>
						<li>
							<a href="/payment" className="no-underline hover:text-gray-700">
								Métodos de Pagamentos
							</a>
						</li>
						<li>
							<a href="/returns" className="no-underline hover:text-gray-700">
								Trocas e Devoluções
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h4 className="font-bold mb-2">BOLETIM INFORMATIVO</h4>
					<div className="flex flex-col md:flex-row mb-2">
						<input
							type="email"
							placeholder="endereço de email"
							className="p-2 h-12 border border-black w-full md:flex-grow text-sm rounded-none"
						/>
						<button className="bg-black text-white h-12 px-4 md:flex-none text-sm">
							Inscrever-se
						</button>
					</div>
					<div className="flex items-start">
						<input type="checkbox" className="mr-2 mt-1" />
						<p className="text-sm">
							CONCORDO COM OS{" "}
							<a href="/terms" className="no-underline hover:text-gray-700">
								TERMOS E CONDIÇÕES
							</a>{" "}
							e com a declaração de{" "}
							<a href="/privacy" className="no-underline hover:text-gray-700">
								proteção de DADOS
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
