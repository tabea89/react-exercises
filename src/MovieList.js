import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    return (
       <ol className='contact-list'>
      {this.props.contacts.map((contact) => (
      <li key={contact.id} className='contact-list-item'>
<div className='contact-avatar'
style={{
       backgroundImage: `url(${contact.avatarURL})`
}}>
</div>
<div class="contact-details">
<p>{contact.name}</p>
<p>{contact.handle}</p>
</div>
<div className='contact-remove'>
Remove
</div>
</li>
))}

</ol>
    );
  }
}