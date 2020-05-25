<div align="center">
    <h1>
    <br/>
    <br/>
    👨🏻‍⚕️
    <br />
    use-none-blocking-local-storage
    <br />
    <br />
    <br />
</h1>

### Example

```js
const App = () => {
    const [state, setState] = useStorage('my-key', { a: 1, b: 2, c: 3 });

    useEffect(() => {
        setState(...);
    }, [...deps]);

    console.log('state', state);
    
    return null;
};
```