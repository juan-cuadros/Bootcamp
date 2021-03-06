import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import ArtistAlbums from "../routes/ArtistAlbums";
import ArtistTopTracks from "../routes/ArtistTopTracks";
import styles from "./Artists.module.css";
import NavBar from "./NavBar";

export default function Artists({ artists, ...routerProps }) {
  return (
    <ul className={styles.artists}>
      {artists.map(artist => (
        <ArtistListItem key={artist.id} {...artist} {...routerProps} />
      ))}
    </ul>
  );
}

function ArtistListItem({ name, images, genres, id, match, location }) {
  return (
    <li
      className={`${styles.artist} ${
        location.pathname.startsWith(`${match.path}/${id}`) ? styles.active : ""
      }`}
      // style={{ maxHeight: Math.min(images[0].height, 500) }}
    >
      <img src={images[0].url} alt={name} />
      <NavLink activeClassName={styles.active} to={`${match.path}/${id}`}>
        <h1>{name}</h1>
        <p>{genres.join(", ")}</p>
      </NavLink>
      <NavBar
        links={[
          { name: "Top Tracks", href: `${match.path}/${id}/top-tracks` },
          { name: "Albums", href: `${match.path}/${id}/albums` },
        ]}
      />
      <Switch>
        <Route
          path={`${match.path}/${id}/albums`}
          render={() => <ArtistAlbums artistId={id} artistName={name} />}
        />
        <Route
          path={`${match.path}/${id}/top-tracks`}
          render={() => <ArtistTopTracks artistId={id} artistName={name} />}
        />
        <Redirect
          from={`${match.path}/${id}`}
          to={`${match.path}/${id}/top-tracks`}
        />
      </Switch>
    </li>
  );
}

Artists.defaultProps = {
  artists: [],
};
