import glob from 'glob';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: glob.sync('src/**/index.ts'),
  output: [
    {
      dir: 'build',
      format: 'cjs',
      sourcemap: true
    }
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    commonjs({
      include: /node_modules/
    }),
    typescript({ useTsconfigDeclarationDir: true })
  ]
};
