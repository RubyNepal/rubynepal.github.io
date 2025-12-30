## RubyNepal.org

The RubyNepal.org is a static site powered by [jekyll](https://jekyllrb.com/). The source code can be found on [github](https://github.com/RubyNepal/rubynepal.github.io/) and [site is hosted](https://rubynepal.org) on [netlify](https://app.netlify.com/sites/rubynepal).

## Contributing

If jekyll is new to you, you may want to go through its [docs](https://jekyllrb.com/docs/home/) first.
[CloudCannon](https://learn.cloudcannon.com/jekyll/why-use-a-static-site-generator/) has some excellent jekyll video tutorials as well.

You can also use [prose.io](https://prose.io) to submit the changes without cloning the repo.

Steps:

```bash
# Fork the repo
github.com:RubyNepal/rubynepal.github.io

# Clone your forked repo
$ git clone git@github.com:<your_github_username>/rubynepal.github.io.git
$ bundle install

# Create a new branch for you.
$ git pull orgin master # You should be in master branch
$ git checkout new-branch # Change or add post or do something there

# Make your changes.
$ bundle exec jekyll serve # Fires up local server at port 4000
# Preview the changes on localhost:4000

# Make sure linters are happy
$ npm install
$ npm run watch
$ bundle exec guard # to auto run tests and other linter checks (js, sass, html)
$ ./node_modules/.bin/eslint --config .eslintrc.json *.js js/**/*.js --fix
# Run below command to compile React files (if any changed) into `bundle/meetup.js` file.
$ ./node_modules/webpack/bin/webpack.js --mode production

# Commit the changes
$ git commit -m 'My awesome contribution'

# Push your changes and
$ git push

# Make a pull request of your newly changed branch against
[https://github.com/RubyNepal/rubynepal.github.io/compare](https://github.com/RubyNepal/rubynepal.github.io/compare)

# After you create a pull request, tests are run automatically on the newly created PR using Hound and TravisCI for style and lint checks.

# Deploy preview is auto created with web url via Netlify.

# When the PR is merged into master, the site is automatically deployed with the help of netlify continuous deployment.
```

You can also use [jekyll-admin](https://github.com/jekyll/jekyll-admin/) by visiting [localhost:4000/admin](localhost:4000/admin) to write blogs with WYSIWYG UI editor and make other changes.

#### When you open a pull request, we'd appreciate if you follow some basic guidelines:

Describe what you're changing, and more importantly why you're changing it

Keep the pull request focused on one thing - if you make two different, unrelated changes, please separate them into two pull requests

## Collaborators

<!-- readme: collaborators -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/jonathanclarke">
                    <img src="https://avatars.githubusercontent.com/u/11335?v=4" width="100;" alt="jonathanclarke"/>
                    <br />
                    <sub><b>Jonathan Clarke</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/zoras">
                    <img src="https://avatars.githubusercontent.com/u/365783?v=4" width="100;" alt="zoras"/>
                    <br />
                    <sub><b>Saroj Maharjan</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/xecutioner">
                    <img src="https://avatars.githubusercontent.com/u/672474?v=4" width="100;" alt="xecutioner"/>
                    <br />
                    <sub><b>Kapil Raj Nakhwa</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/dipil-saud">
                    <img src="https://avatars.githubusercontent.com/u/672476?v=4" width="100;" alt="dipil-saud"/>
                    <br />
                    <sub><b>Dipil Saud</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/prasvin">
                    <img src="https://avatars.githubusercontent.com/u/672496?v=4" width="100;" alt="prasvin"/>
                    <br />
                    <sub><b>prasvin pandey</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/josisusan">
                    <img src="https://avatars.githubusercontent.com/u/1419169?v=4" width="100;" alt="josisusan"/>
                    <br />
                    <sub><b>Susan Joshi</b></sub>
                </a>
            </td>
		</tr>
		<tr>
            <td align="center">
                <a href="https://github.com/gkunwar">
                    <img src="https://avatars.githubusercontent.com/u/1822907?v=4" width="100;" alt="gkunwar"/>
                    <br />
                    <sub><b>Ganesh K.</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/madhusudhan1234">
                    <img src="https://avatars.githubusercontent.com/u/8276878?v=4" width="100;" alt="madhusudhan1234"/>
                    <br />
                    <sub><b>Madhu Sudhan Subedi</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/kelishrestha">
                    <img src="https://avatars.githubusercontent.com/u/10415266?v=4" width="100;" alt="kelishrestha"/>
                    <br />
                    <sub><b>Kelina Shrestha</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/coolprobn">
                    <img src="https://avatars.githubusercontent.com/u/15196941?v=4" width="100;" alt="coolprobn"/>
                    <br />
                    <sub><b>Prabin Poudel</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/staticmanapp">
                    <img src="" width="100;" alt="staticmanapp"/>
                    <br />
                    <sub><b>staticmanapp</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: collaborators -end -->

## Contributors

- Many thanks to the site's recent contributors: [github.com/RubyNepal/rubynepal.github.io/contributors](https://github.com/RubyNepal/rubynepal.github.io/graphs/contributors)

<!-- readme: contributors -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/zoras">
                    <img src="https://avatars.githubusercontent.com/u/365783?v=4" width="100;" alt="zoras"/>
                    <br />
                    <sub><b>Saroj Maharjan</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/josisusan">
                    <img src="https://avatars.githubusercontent.com/u/1419169?v=4" width="100;" alt="josisusan"/>
                    <br />
                    <sub><b>Susan Joshi</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/madhusudhan1994">
                    <img src="https://avatars.githubusercontent.com/u/38003359?v=4" width="100;" alt="madhusudhan1994"/>
                    <br />
                    <sub><b>madhusudhan1994</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/jonathanclarke">
                    <img src="https://avatars.githubusercontent.com/u/11335?v=4" width="100;" alt="jonathanclarke"/>
                    <br />
                    <sub><b>Jonathan Clarke</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/madhusudhan1234">
                    <img src="https://avatars.githubusercontent.com/u/8276878?v=4" width="100;" alt="madhusudhan1234"/>
                    <br />
                    <sub><b>Madhu Sudhan Subedi</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/kelishrestha">
                    <img src="https://avatars.githubusercontent.com/u/10415266?v=4" width="100;" alt="kelishrestha"/>
                    <br />
                    <sub><b>Kelina Shrestha</b></sub>
                </a>
            </td>
		</tr>
		<tr>
            <td align="center">
                <a href="https://github.com/alina02">
                    <img src="https://avatars.githubusercontent.com/u/10445860?v=4" width="100;" alt="alina02"/>
                    <br />
                    <sub><b>Alina Karmacharya</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/brgnepal">
                    <img src="https://avatars.githubusercontent.com/u/1132451?v=4" width="100;" alt="brgnepal"/>
                    <br />
                    <sub><b>Budh Ram Gurung (BRG)</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/Prepsa">
                    <img src="https://avatars.githubusercontent.com/u/38975653?v=4" width="100;" alt="Prepsa"/>
                    <br />
                    <sub><b>Prepsa</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/syslin">
                    <img src="https://avatars.githubusercontent.com/u/30019204?v=4" width="100;" alt="syslin"/>
                    <br />
                    <sub><b>Saneema</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/sushant12">
                    <img src="https://avatars.githubusercontent.com/u/8981250?v=4" width="100;" alt="sushant12"/>
                    <br />
                    <sub><b>Suss Buzz</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/surya000000">
                    <img src="https://avatars.githubusercontent.com/u/26281867?v=4" width="100;" alt="surya000000"/>
                    <br />
                    <sub><b>Surya Prasad Siwakoti</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: contributors -end -->

## LICENSE

See/read [The MIT License](/LICENSE).

## Logo licence

Jekyll and other projects' logos used in this project belong to their respective organisation.
"RubyNepal" logo is Copyright by RubyNepal. All rights reserved.
