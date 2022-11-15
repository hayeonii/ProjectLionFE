export default function Contents({listName}) {
    if (listName === 'one') {
    return (
        <div>one Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, consequatur qui modi dolores deleniti ipsum quasi consequuntur asperiores, beatae facere aperiam quis, delectus voluptatem ratione non deserunt consectetur ex? Id.</div>
    )
    } else if (listName === 'two') {
    return (
        <div>two Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, consequatur qui modi dolores deleniti ipsum quasi consequuntur asperiores, beatae facere aperiam quis, delectus voluptatem ratione non deserunt consectetur ex? Id.</div>
    )
    } else if (listName === 'three') {
    return (
        <div>three Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, consequatur qui modi dolores deleniti ipsum quasi consequuntur asperiores, beatae facere aperiam quis, delectus voluptatem ratione non deserunt consectetur ex? Id.</div>
    )
    } else if (listName === 'four') {
    return (
        <div>four Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, consequatur qui modi dolores deleniti ipsum quasi consequuntur asperiores, beatae facere aperiam quis, delectus voluptatem ratione non deserunt consectetur ex? Id.</div>
    )
    } else if (listName === 'five') {
        return (
        <div>
            five Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur consequuntur architecto ab, ipsa, velit cumque officiis assumenda hic quibusdam saepe, perspiciatis placeat doloribus exercitationem tempora rem libero voluptatum ratione.
        </div>
        )
    }
    

    return (
    <div>404 페이지를 찾을 수 없습니다</div>
    )
}