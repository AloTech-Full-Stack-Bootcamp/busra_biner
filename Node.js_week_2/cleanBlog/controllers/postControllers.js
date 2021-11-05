const Blog = require('../models/Blog');
const fs = require('fs');

exports.getAllPosts = async (req, res) => {
  const page = req.query.page || 1;
  const blogsPerPage = 3;
  const totalBlogs = await Blog.find().countDocuments();
  console.log(totalBlogs);
 /* const blogs = await Blog.find({});
  res.render('index', {
    blogs,
  });*/
};

exports.getPost = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render('post', {
    blog,
  });
};

exports.createPost = async (req, res) => {
  await Blog.create(req.body);
  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  const blog = await Blog.findOne({ _id: req.params.id });
  blog.title = req.body.title;
  blog.detail = req.body.detail;
  blog.save();

  res.redirect(`/blogs/${req.params.id}`);
};

exports.deletePost = async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
