import React from 'react';
import { Button, Comment, Form, Header, Rating } from 'semantic-ui-react';

const Review = () => (
  <Comment.Group>
    <Header as="h3" dividing>
      Commentaires
    </Header>

    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Rating defaultRating={3} maxRating={5} disabled />
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Rating defaultRating={3} maxRating={5} disabled />
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
      <Comment.Content>
        <Comment.Author as="a">Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Rating defaultRating={3} maxRating={5} disabled />
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    <Form reply>
      <Form.TextArea />
      <Rating maxRating={5} clearable />
      <Button content="Ajouter un avis" labelPosition="left" icon="edit" primary />
    </Form>
  </Comment.Group>
);

export default Review;
