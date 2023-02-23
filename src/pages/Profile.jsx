import React from 'react'
import Header from '../components/Header'
import { ProfileStyles, ProfileHeader } from '../styles/profileStyles'
import profile1 from '../imgs/profile/1.png'

function Profile() {
  return (
    <>
      <Header />
      <ProfileHeader>
        <h1>Kelvyn Khrystian</h1>
      </ProfileHeader>
      <ProfileStyles>
        <section>
          <img src={profile1} alt="kelvyn de perfil" />
          <img src={profile1} alt="kelvyn de perfil" />
        </section>
        <p></p>
        <h3>Contatos</h3>
        <div>
          <a href="https://www.linkedin.com/in/kelvynkhrystian/">
            <p> Linked </p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEUAd7f///8AdbYAcLQAZrDy+Pvj8PdSkcM+h7/F2emNttcAabH6/P0AcrUzhb7Z5fAAbLKGr9Ovy+JnncobgLvR4e57qdDq8/hilsa50eVYlsZvo80de7mbv9s1gby81ujM2enMAAADd0lEQVRoge2bbZeqIBDHecgMdRI1tDWt7/8tr9Wto+sgxl3g3LP+X+wbXH4NwjAzCKEPZaKIT8SHTnEhsieUPP6WHQfGvLAZA96Vb3ZUST/cN19W0ZMdxdwr+S4eRw925R89wKs7u5QB0ITIkpKs8/uuX2JdRkSIEb+LC1JAIDYUJA4z5MOgx+QUjO3Hj36swfd5c7QTgezOdVLUZyI9z0UGlWiee03z1XKftvODoiOJzp/psqZTRa0v/5MmdKaLHzhc5miatT6GfXDxCJvufSw2XmJoSnv3Oy274mgagXPDea9h09r5GwelY9+cD/q10bGbnWM0O6Cz/CHXdrNYi6au3csS27nd10iHjlLXbJbr2MI1m8gvHTtxvp2A9oUf3Tt0nXO5OR9yreHRwUfgJNGNLPGTMO6QUfeVqzI+m+u9+w30JZ5MPExz8Rkl82P5pjd95zdLZrK79EIpkVQkQFkCuEzTlIdIyH6n2EQfNQJI/pTkFuHlPe0eC8Z9wLdGNlqAjMO1rcubULlSt7Jor/Dh8uSFyidSo3SMt2LamJevIhnwQ59P471IJd0ndImE6MULztp5Y/6As7TFt8DbMV1LZwz5/+ZlW4r1f08b+FEb2dOSrXzxaLj43kJ3e6R1CGnSWh9cDz99ZbXYio29p7GydQm8DXtXLKPvCfwauAW7QCagtocfZvfaJG6k/Yp8zoK9Tr151J2xqbly645dGg13x86uJsPdsc1plUN2bnKtDtnUdEbhkl0YBv0f2Nk+H6KGBUcjDDGvNTvqYzZEtrI7C90jjSHqtWWrk/zbM6StpnJicuqW7HJ8lAydBn5Znul2bDU9xYYD/phhhduxvx+q4lm8KZe2Ys8q3KxDnzMUq2zYiKdGg0rTJm7DRswB5NRlWGQ/bzdSW8ero82PzzVs2TLAgmbD6YMFe49Zs8OWuOEjAws2Ont3WGU2Wz53tmCjqzbFvHq2HLPZ5UT/A3u5IryxN/bG3tgbe2Nv7I29sTf2xt7YG/sXsrGynCc2SZFihXr1jn5r1WIdcqzQhFZHRoJqBm/idyHpNDe8RIukjMwNjyrTyQE/FslE9ehDbEbqaWNy1hxwM7h8e7I4rDgiAz4RLDXqj9ZnT/r7OmiFQt6zCHm/JOS9mpD3iULeowp5fyzovbmg9wVD3pOkIe+H0kD3Yv8A1s5CNIt3MoYAAAAASUVORK5CYII=" alt="logo linkedin" />
          </a>
          <a href="https://www.linkedin.com/in/kelvynkhrystian/">
            <p> Github </p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEUAd7f///8AdbYAcLQAZrDy+Pvj8PdSkcM+h7/F2emNttcAabH6/P0AcrUzhb7Z5fAAbLKGr9Ovy+JnncobgLvR4e57qdDq8/hilsa50eVYlsZvo80de7mbv9s1gby81ujM2enMAAADd0lEQVRoge2bbZeqIBDHecgMdRI1tDWt7/8tr9Wto+sgxl3g3LP+X+wbXH4NwjAzCKEPZaKIT8SHTnEhsieUPP6WHQfGvLAZA96Vb3ZUST/cN19W0ZMdxdwr+S4eRw925R89wKs7u5QB0ITIkpKs8/uuX2JdRkSIEb+LC1JAIDYUJA4z5MOgx+QUjO3Hj36swfd5c7QTgezOdVLUZyI9z0UGlWiee03z1XKftvODoiOJzp/psqZTRa0v/5MmdKaLHzhc5miatT6GfXDxCJvufSw2XmJoSnv3Oy274mgagXPDea9h09r5GwelY9+cD/q10bGbnWM0O6Cz/CHXdrNYi6au3csS27nd10iHjlLXbJbr2MI1m8gvHTtxvp2A9oUf3Tt0nXO5OR9yreHRwUfgJNGNLPGTMO6QUfeVqzI+m+u9+w30JZ5MPExz8Rkl82P5pjd95zdLZrK79EIpkVQkQFkCuEzTlIdIyH6n2EQfNQJI/pTkFuHlPe0eC8Z9wLdGNlqAjMO1rcubULlSt7Jor/Dh8uSFyidSo3SMt2LamJevIhnwQ59P471IJd0ndImE6MULztp5Y/6As7TFt8DbMV1LZwz5/+ZlW4r1f08b+FEb2dOSrXzxaLj43kJ3e6R1CGnSWh9cDz99ZbXYio29p7GydQm8DXtXLKPvCfwauAW7QCagtocfZvfaJG6k/Yp8zoK9Tr151J2xqbly645dGg13x86uJsPdsc1plUN2bnKtDtnUdEbhkl0YBv0f2Nk+H6KGBUcjDDGvNTvqYzZEtrI7C90jjSHqtWWrk/zbM6StpnJicuqW7HJ8lAydBn5Znul2bDU9xYYD/phhhduxvx+q4lm8KZe2Ys8q3KxDnzMUq2zYiKdGg0rTJm7DRswB5NRlWGQ/bzdSW8ero82PzzVs2TLAgmbD6YMFe49Zs8OWuOEjAws2Ont3WGU2Wz53tmCjqzbFvHq2HLPZ5UT/A3u5IryxN/bG3tgbe2Nv7I29sTf2xt7YG/sXsrGynCc2SZFihXr1jn5r1WIdcqzQhFZHRoJqBm/idyHpNDe8RIukjMwNjyrTyQE/FslE9ehDbEbqaWNy1hxwM7h8e7I4rDgiAz4RLDXqj9ZnT/r7OmiFQt6zCHm/JOS9mpD3iULeowp5fyzovbmg9wVD3pOkIe+H0kD3Yv8A1s5CNIt3MoYAAAAASUVORK5CYII=" alt="logo linkedin" />
          </a>
          <a href="https://www.linkedin.com/in/kelvynkhrystian/">
            <p> Whatsapp </p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEUAd7f///8AdbYAcLQAZrDy+Pvj8PdSkcM+h7/F2emNttcAabH6/P0AcrUzhb7Z5fAAbLKGr9Ovy+JnncobgLvR4e57qdDq8/hilsa50eVYlsZvo80de7mbv9s1gby81ujM2enMAAADd0lEQVRoge2bbZeqIBDHecgMdRI1tDWt7/8tr9Wto+sgxl3g3LP+X+wbXH4NwjAzCKEPZaKIT8SHTnEhsieUPP6WHQfGvLAZA96Vb3ZUST/cN19W0ZMdxdwr+S4eRw925R89wKs7u5QB0ITIkpKs8/uuX2JdRkSIEb+LC1JAIDYUJA4z5MOgx+QUjO3Hj36swfd5c7QTgezOdVLUZyI9z0UGlWiee03z1XKftvODoiOJzp/psqZTRa0v/5MmdKaLHzhc5miatT6GfXDxCJvufSw2XmJoSnv3Oy274mgagXPDea9h09r5GwelY9+cD/q10bGbnWM0O6Cz/CHXdrNYi6au3csS27nd10iHjlLXbJbr2MI1m8gvHTtxvp2A9oUf3Tt0nXO5OR9yreHRwUfgJNGNLPGTMO6QUfeVqzI+m+u9+w30JZ5MPExz8Rkl82P5pjd95zdLZrK79EIpkVQkQFkCuEzTlIdIyH6n2EQfNQJI/pTkFuHlPe0eC8Z9wLdGNlqAjMO1rcubULlSt7Jor/Dh8uSFyidSo3SMt2LamJevIhnwQ59P471IJd0ndImE6MULztp5Y/6As7TFt8DbMV1LZwz5/+ZlW4r1f08b+FEb2dOSrXzxaLj43kJ3e6R1CGnSWh9cDz99ZbXYio29p7GydQm8DXtXLKPvCfwauAW7QCagtocfZvfaJG6k/Yp8zoK9Tr151J2xqbly645dGg13x86uJsPdsc1plUN2bnKtDtnUdEbhkl0YBv0f2Nk+H6KGBUcjDDGvNTvqYzZEtrI7C90jjSHqtWWrk/zbM6StpnJicuqW7HJ8lAydBn5Znul2bDU9xYYD/phhhduxvx+q4lm8KZe2Ys8q3KxDnzMUq2zYiKdGg0rTJm7DRswB5NRlWGQ/bzdSW8ero82PzzVs2TLAgmbD6YMFe49Zs8OWuOEjAws2Ont3WGU2Wz53tmCjqzbFvHq2HLPZ5UT/A3u5IryxN/bG3tgbe2Nv7I29sTf2xt7YG/sXsrGynCc2SZFihXr1jn5r1WIdcqzQhFZHRoJqBm/idyHpNDe8RIukjMwNjyrTyQE/FslE9ehDbEbqaWNy1hxwM7h8e7I4rDgiAz4RLDXqj9ZnT/r7OmiFQt6zCHm/JOS9mpD3iULeowp5fyzovbmg9wVD3pOkIe+H0kD3Yv8A1s5CNIt3MoYAAAAASUVORK5CYII=" alt="logo linkedin" />
          </a>
          <a href="https://www.linkedin.com/in/kelvynkhrystian/">
            <p> khrsytian.dev@hotmail.com </p>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEUAd7f///8AdbYAcLQAZrDy+Pvj8PdSkcM+h7/F2emNttcAabH6/P0AcrUzhb7Z5fAAbLKGr9Ovy+JnncobgLvR4e57qdDq8/hilsa50eVYlsZvo80de7mbv9s1gby81ujM2enMAAADd0lEQVRoge2bbZeqIBDHecgMdRI1tDWt7/8tr9Wto+sgxl3g3LP+X+wbXH4NwjAzCKEPZaKIT8SHTnEhsieUPP6WHQfGvLAZA96Vb3ZUST/cN19W0ZMdxdwr+S4eRw925R89wKs7u5QB0ITIkpKs8/uuX2JdRkSIEb+LC1JAIDYUJA4z5MOgx+QUjO3Hj36swfd5c7QTgezOdVLUZyI9z0UGlWiee03z1XKftvODoiOJzp/psqZTRa0v/5MmdKaLHzhc5miatT6GfXDxCJvufSw2XmJoSnv3Oy274mgagXPDea9h09r5GwelY9+cD/q10bGbnWM0O6Cz/CHXdrNYi6au3csS27nd10iHjlLXbJbr2MI1m8gvHTtxvp2A9oUf3Tt0nXO5OR9yreHRwUfgJNGNLPGTMO6QUfeVqzI+m+u9+w30JZ5MPExz8Rkl82P5pjd95zdLZrK79EIpkVQkQFkCuEzTlIdIyH6n2EQfNQJI/pTkFuHlPe0eC8Z9wLdGNlqAjMO1rcubULlSt7Jor/Dh8uSFyidSo3SMt2LamJevIhnwQ59P471IJd0ndImE6MULztp5Y/6As7TFt8DbMV1LZwz5/+ZlW4r1f08b+FEb2dOSrXzxaLj43kJ3e6R1CGnSWh9cDz99ZbXYio29p7GydQm8DXtXLKPvCfwauAW7QCagtocfZvfaJG6k/Yp8zoK9Tr151J2xqbly645dGg13x86uJsPdsc1plUN2bnKtDtnUdEbhkl0YBv0f2Nk+H6KGBUcjDDGvNTvqYzZEtrI7C90jjSHqtWWrk/zbM6StpnJicuqW7HJ8lAydBn5Znul2bDU9xYYD/phhhduxvx+q4lm8KZe2Ys8q3KxDnzMUq2zYiKdGg0rTJm7DRswB5NRlWGQ/bzdSW8ero82PzzVs2TLAgmbD6YMFe49Zs8OWuOEjAws2Ont3WGU2Wz53tmCjqzbFvHq2HLPZ5UT/A3u5IryxN/bG3tgbe2Nv7I29sTf2xt7YG/sXsrGynCc2SZFihXr1jn5r1WIdcqzQhFZHRoJqBm/idyHpNDe8RIukjMwNjyrTyQE/FslE9ehDbEbqaWNy1hxwM7h8e7I4rDgiAz4RLDXqj9ZnT/r7OmiFQt6zCHm/JOS9mpD3iULeowp5fyzovbmg9wVD3pOkIe+H0kD3Yv8A1s5CNIt3MoYAAAAASUVORK5CYII=" alt="logo linkedin" />
          </a>
        </div>
        

      </ProfileStyles>
    </>
  )
}

export default Profile