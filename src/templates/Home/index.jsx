import { Component } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 6,
    searchValue: "",
  }

  async componentDidMount() {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  handleButton = () => {
    const { posts, allPosts, postsPerPage, page } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts: posts, page: nextPage });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { allPosts, posts, searchValue } = this.state;
    const filteredPosts = searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
      :
      posts;

    return (
      <section className="container">
        <div className="search-container">
          {searchValue &&
            <h2>Busca: {searchValue}</h2>
          }
          <TextInput
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
        </div>
        {filteredPosts.length > 0 &&
          <Posts
            posts={filteredPosts}
          />
        }
        {filteredPosts.length === 0 &&
          <p>Não existem posts :(</p>
        }
        <div className='button-container'>
          {!searchValue &&
            <Button
              text={'Carregar Mais'}
              handleButton={this.handleButton}
            />
          }
        </div>
      </section>
    );
  }
}

