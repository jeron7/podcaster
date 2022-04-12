module.exports = {
  images: {
    domains : ['storage.googleapis.com']
  },
  webpack: (config, {isServer}) => {
    if (!isServer) config.resolve.fallback.fs = false;
    return config
  }
};
