import React, { useState } from "react";
import Modal from "react-modal";
import editing from "../icons/editing.png";
import cancel from "../icons/cancel.png";
import diskette from '../icons/diskette.png'

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    height: "240px",
    width: "520px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const UpdateProduct = ({ data, id }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [size, setSize] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleUpdate(){
    data.forEach(element => {
      if(element.id === id){
          element.name = name?? element.name;
          element.category = category?? element.category;
          element.size = size?? element.size;
          element.price = price?? element.price;
          element.stock = stock?? element.stock;
      }
  });

  await electron.save(JSON.stringify(data))
  window.location.reload();
  }

  return (
    <div>
      <button onClick={openModal}>
        <img className="icon" src={editing} />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Update Product"
      >
        <ul className="list">
          <li>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
              Atualizar Produto
            </h2>
          </li>
          <li>
            <img className="icon" src={cancel} onClick={closeModal} />
          </li>
        </ul>

        <form>
        <ul className="list">
        <li>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="nome do produto"
          />
        </li>

        <li>
          <select
            name="category"
            id="category"
            placeholder="categoria"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>categoria</option>
            <option>calcinha</option>
            <option>sutiã</option>
            <option>conjunto</option>
            <option>infantil</option>
            <option>roupa</option>
          </select>
        </li>

        <li>
          <input
            onChange={(e) => setSize(e.target.value)}
            type="text"
            placeholder="tamanho"
          />
        </li>

        <li>
        <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="preço"
          />

        </li>

        <li>
            <input type="number" min={0} 
            placeholder="estoque" onChange={e => setStock(e.target.value)}/>
        </li>
        <li>
        <img className="icon" src={diskette} onClick={handleUpdate}/>
        </li>
      </ul>
        </form>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
