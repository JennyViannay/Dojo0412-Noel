import React from "react";

const Gift = (props) => {
  return (
    <>
      <div className="col-4 text-center my-5">
        <h2>{props.name}</h2>
        <img src="https://via.placeholder.com/200" alt="" className="img-thumbnail" />
        <p>id Gift: {props.id}</p>
        <p>Enfant :{props.child_id}</p>
        <p>Lutin : {props.lutin}</p>
        <p> Statut :
          {props.status === 1 ? ' À fabriquer' : ''}
          {props.status === 2 ? ' En cours de fabrication' : ''}
          {props.status === 3 ? ' Terminé' : ''}
        </p>
        <button className="btn btn-info mx-3" type="button" data-toggle="modal" data-target="#exampleModal" onClick={props.infos}><i className="fas fa-info"></i></button>
        {/* Si le statut du cadeau est à l'état DOING on ne peut plus le supprimer */}
        {props.status > 1 ? '' :

          <button className="btn btn-danger mx-3" type="button" onClick={props.delete}><i className="fas fa-trash"></i></button>
        }
        {/* Si le statut du cadeau est DOING ou DONE on ne peut plus se l'attribuer  */}
        {props.status === 2 || props.status === 3 ? '' :
          <button className="btn btn-primary mx-3" type="button" onClick={props.doing}><i className="fas fa-hammer"></i></button>
        }
        {/* Si le cadeau est terminé on affiche "CADEAU TERMINE" */}
        {props.status === 3 ? '' :
          <button className="btn btn-success mx-3" type="button" onClick={props.done} ><i className="fas fa-check-circle"></i></button>
        }
      </div>
    </>
  );
};

export default Gift